import { useState, useEffect } from "react";

const useRestaurantDetails = () => {
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

        if ( !searchText ) {
            setFilteredRestaurantz( allRestaurantz );
        }
        else {
            const data = filterRestaurant( searchText, allRestaurantz );
            setFilteredRestaurantz( data );
        }
    }

    return { filteredRestaurantz, searchText, allRestaurantz };
}

export default useRestaurantDetails;