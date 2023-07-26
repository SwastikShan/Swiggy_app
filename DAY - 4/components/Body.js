import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurant } from "../utils/helper";
import useOnline from "../utils/useOnline";

export const Body = () => {
    const [ allRestaurantz, setAllRestaurantz ] = useState( [] );
    const [ filteredRestaurantz, setFilteredRestaurantz ] = useState( [] );
    const [ searchText, setSeachText ] = useState( "" );

    useEffect( () => {
        getRestaurants();
    }, [] )

    async function getRestaurants() {
        try {
            const data = await fetch(
                "https://www.swiggy.com/mapi/homepage/getCards?lat=19.024156&lng=72.8370062"
            );

            if ( !data.ok ) {
                throw new Error( "Network response was not ok." );
            }

            const json = await data.json();
            console.log( json );
            console.log( json?.data?.success?.cards[ 1 ]?.gridWidget?.gridElements?.infoWithStyle?.restaurants );

            setAllRestaurantz( json?.data?.success?.cards[ 1 ]?.gridWidget?.gridElements?.infoWithStyle?.restaurants );

            setFilteredRestaurantz( json?.data?.success?.cards[ 1 ]?.gridWidget?.gridElements?.infoWithStyle?.restaurants );
        } catch ( error ) {
            console.error( "Error fetching restaurant data:", error );
            // Handle errors gracefully or display a message to the user.
        }
    }


    const onChangeHandler = ( e ) => {
        const searchText = e.target.value;
        setSeachText( searchText );

        if ( !searchText )
        {
            setFilteredRestaurantz( allRestaurantz );
        }
        else
        {
            const data = filterRestaurant( searchText, allRestaurantz );
            setFilteredRestaurantz( data );
        }
    }

    const isOnline = useOnline();

    if ( !isOnline ) {
        return (
            <>
                <div className="offline-message-container">
                    <h2 className="offline-message">
                        You're Offline, Kabhi toh time pr wifi k bill bhar do...
                    </h2>
                </div>
                <div className="offline-image-container">
                    <img
                        src="./hero.JPG"
                        alt="hero-image"
                        className="offline-image"
                    />
                </div>
            </>
        );
    }

    /* 
    Conditional rendering:
    1. if restaurant has no data then use shimmering effect -> UX principle
    1. if restaurant has actual data then use actual data
    */

    if ( !allRestaurantz ) return null;

    return allRestaurantz?.length === 0 ? ( <Shimmer /> ) :
        (
            <>
                <div className="flex items-center justify-center p-5">
                    <input
                        type="text"
                        placeholder="Search By Restaurant Name..."
                        value={searchText}
                        onChange={onChangeHandler}
                        className="bg-white p-5 rounded-full w-96 border border-black"
                    />
                </div>

                <div className="flex flex-wrap items-center justify-evenly">
                    {
                        filteredRestaurantz?.length ===0 ? <h1>Kyu krta hai bhai yeh sab? Maine hr point pr check lga diya!</h1> :  filteredRestaurantz?.map( ( restaurant ) => {
                            return <Link to={"/restaurant/" + restaurant.info.id}><RestaurantCard data={restaurant.info} key={restaurant.info.id} /></Link>
                        } )
                    }
                </div>
            </>
        );
}