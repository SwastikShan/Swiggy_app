import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../components/Config";

const useRestaurant = ( resId ) => {
    const [ restaurant, setRestaurant ] = useState( null );

    useEffect( () => {
        getRestaurantInfo();
    }, [] );

    async function getRestaurantInfo() {
        const data = await fetch( FETCH_MENU_URL + resId );

        const json = await data.json();
        setRestaurant( json?.data?.cards );
    }

    return restaurant;
}

export default useRestaurant;