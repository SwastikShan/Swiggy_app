import { restaurantList } from "./Config";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterRestaurant( searchText, restaurantz ) {
    return restaurantz.filter( ( restaurant ) =>
        restaurant.data.name.toLowerCase().includes( searchText.toLowerCase() )
    );
}

export const Body = () => {
    const [ restaurantz, setRestaurantz ] = useState( null );
    const [ searchText, setSeachText ] = useState( "" );

    useEffect( () => {
        getRestaurants();
    }, [] )

    async function getRestaurants() {
        try {
            const data = await fetch(
                "https://www.swiggy.com/mapi/homepage/getCards?lat=23.1685786&lng=79.9338798"
            );

            if ( !data.ok ) {
                throw new Error( "Network response was not ok." );
            }

            const json = await data.json();
            console.log( json );
            console.log( json?.data?.success?.cards[ 5 ]?.gridWidget?.gridElements?.infoWithStyle?.restaurants );
            setRestaurantz( json?.data?.success?.cards[ 5 ]?.gridWidget?.gridElements?.infoWithStyle?.restaurants );
        } catch ( error ) {
            console.error( "Error fetching restaurant data:", error );
            // Handle errors gracefully or display a message to the user.
        }
    }


    const onChangeHandler = ( e ) => {
        setSeachText( e.target.value );
    }

    /* 
    Conditional 
    */

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchText}
                    onChange={onChangeHandler}
                />
                <button className="search-btn" onClick={() => {
                    const filteredData = filterRestaurant( searchText, restaurantz );
                    setRestaurantz( filteredData );
                }}>
                    Search
                </button>
                <button className="search-btn" onClick={() => {
                    setRestaurantz( restaurantz );
                    setSeachText( "" );
                }}>
                    Reset
                </button> - {searchText}
            </div>
            <div className="restaurant-list">
                {
                    
                    restaurantz?.map( ( restaurant ) => {
                        return <RestaurantCard data={restaurant.info} key={restaurant.info.id} />
                    } )
                }
                    
            </div>


        </>
    );
}