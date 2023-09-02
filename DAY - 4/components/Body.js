import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurant } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

export const Body = () => {
    const [ allRestaurantz, setAllRestaurantz ] = useState( [] );
    const [ filteredRestaurantz, setFilteredRestaurantz ] = useState( [] );
    const [ searchText, setSeachText ] = useState( "" );
    const { user, setUser } = useContext( UserContext );

    useEffect( () => {
        getRestaurants();
    }, [] );
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );

    async function getRestaurants() {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559"
            );

            if ( !data.ok ) {
                throw new Error( "Network response was not ok." );
            }

            const json = await data.json();
            console.log( json );
            // console.log(
            //     json?.data?.success?.cards[ 1 ]?.gridWidget?.gridElements?.infoWithStyle
            //         ?.restaurants
            // );

            setAllRestaurantz(
                json?.data?.cards[ 5 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );

            setFilteredRestaurantz(
                json?.data?.cards[ 5 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
            console.log( `hello babu pehle` );
            console.log( json?.data?.cards[4]);
            console.log( `hello babu baad` );
        } catch ( error ) {
            console.error( "Error fetching restaurant data:", error );
            // Handle errors gracefully or display a message to the user.
        }
    }

    const onChangeHandler = ( e ) => {
        const searchText = e.target.value;
        setSeachText( searchText );

        if ( !searchText ) {
            setFilteredRestaurantz( allRestaurantz );
        } else {
            const data = filterRestaurant( searchText, allRestaurantz );
            setFilteredRestaurantz( data );
        }
    };

    const isOnline = useOnline();

    if ( !isOnline ) {
        return (
            <div className="flex min-h-screen items-center justify-center flex-col text-5xl font-extralight">
                <div className="offline-message-container">
                    <h2 className="offline-message">
                        Oh! You're offline, check your internet connection! 💔
                    </h2>
                </div>
                {/* <div className="offline-image-container">
                    <img src="../components/hero.JPG" alt="hero-image" className="offline-image" />
                </div> */}
            </div>
        );
    }

    /* 
      Conditional rendering:
      1. if restaurant has no data then use shimmering effect -> UX principle
      1. if restaurant has actual data then use actual data
      */

    if ( !allRestaurantz ) return null;

    return allRestaurantz?.length === 0 ? (
        <Shimmer />
    ) : (
            <>
                <div className="flex items-center justify-center">
            <div className="flex items-center justify-center p-5 space-x-5">
                <input
                    type="text"
                    placeholder="Search By Restaurant Name..."
                    value={searchText}
                    onChange={onChangeHandler}
                    className="bg-white p-5 rounded-full w-96 border border-black shadow-md focus:outline-none focus:border-blue-500"
                />
            </div>
                    <div className="flex items-center justify-center p-5">
                        <input
                            type="text"
                            placeholder="Change user's name"
                            value={user.name}
                            onChange={( e ) => setUser( { ...user, name: e.target.value } )}
                            className="bg-white p-5 rounded-full w-96 border border-black shadow-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-center p-5">
                        <input
                            type="text"
                            placeholder="Change user's email"
                            value={user.email}
                            onChange={( e ) => setUser( { ...user, email: e.target.value } )}
                            className="bg-white p-5 rounded-full w-96 border border-black shadow-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredRestaurantz?.length === 0 ? (
                    <h1 className="flex items-center justify-center flex-col h-full">
                        No results found!
                    </h1>
                ) : (
                    filteredRestaurantz?.map( ( restaurant ) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                                <RestaurantCard data={restaurant.info} />
                            </Link>
                        );
                    } )
                )}
            </div>
        </>
    );
};
