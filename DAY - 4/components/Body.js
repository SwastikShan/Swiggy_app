import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

function filterRestaurant( searchText, restaurantz ) {
    return restaurantz.filter( ( restaurant ) =>
        restaurant?.info?.name?.toLowerCase()?.includes( searchText?.toLowerCase() )
    );
}


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

    /* 
    Conditional rendering:
    1. if restaurant has no data then use shimmering effect -> UX principle
    1. if restaurant has actual data then use actual data
    */

    if ( !allRestaurantz ) return null;

    // if ( filteredRestaurantz?.length === 0 ) return <h1>Chodu hai kya bhai?</h1>

    return allRestaurantz?.length === 0 ? ( <Shimmer /> ) :
        (
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
                        const filteredData = filterRestaurant( searchText, allRestaurantz );
                        setFilteredRestaurantz( filteredData );
                    }}>
                        Search
                    </button>
                    <button className="search-btn" onClick={() => {
                        setFilteredRestaurantz( allRestaurantz );
                        setSeachText( "" );
                    }}>
                        Reset
                    </button> - {searchText}
                </div>
                <div className="restaurant-list">
                    {
                        filteredRestaurantz?.length ===0 ? <h1>Kyu krta hai bhai yeh sab? Maine hr point pr check lga diya!</h1> :  filteredRestaurantz?.map( ( restaurant ) => {
                            return <Link to={"/restaurant/" + restaurant.info.id}><RestaurantCard data={restaurant.info} key={restaurant.info.id} /></Link>
                        } )
                    }

                </div>


            </>
        );
}