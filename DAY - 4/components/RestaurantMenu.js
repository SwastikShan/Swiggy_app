import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Config";
import { Shimmer } from "./Shimmer";

export const RestaurantMenu = () => {
    const { resId } = useParams();
    console.log( `This is your params : ${ resId }` );

    const [ restaurant, setRestaurant ] = useState( null );

    useEffect( () => {
        getRestaurantInfo();
    }, [] );

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=" + resId
        );
        const json = await data.json();
        console.log( `19th line : ${ json.data.cards[ 0 ].card.card.info.name }` );


        const itemNames = json?.data?.cards[ 3 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[ 1 ]?.card?.card?.itemCards.map(
            ( item ) => item.card.info.name
        );

        console.log( "yeh menu nikaalne k prayas:", itemNames );

        setRestaurant( json?.data?.cards );
    }

    if ( !restaurant )
    {
        return <Shimmer/>
    }

    return (
        <div className="restaurant-menu-container">
            <div className="restaurant-details">
                <h1 className="restaurant-id">Restaurant id: {resId}</h1>
                <h2 className="restaurant-name">
                    Restaurant name: {restaurant?.[ 0 ]?.card?.card?.info.name}
                </h2>
                <img
                    src={IMG_CDN_URL + restaurant?.[ 0 ]?.card?.card?.info.cloudinaryImageId}
                    alt=""
                    className="restaurant-image"
                />
                <h3 className="cuisines">
                    Cuisines: {restaurant?.[ 0 ]?.card?.card?.info.cuisines.join(", ")}
                </h3>
                <h3 className="ratings">
                    Ratings: {restaurant?.[ 0 ]?.card?.card?.info.avgRating}
                </h3>
                <h3 className="area">
                    Area: {restaurant?.[ 0 ]?.card?.card?.info.areaName},{" "}
                    {restaurant?.[ 0 ]?.card?.card?.info.city}
                </h3>
                <h3 className="cost-for-two">
                    Cost for two: {restaurant?.[ 0 ]?.card?.card?.info.costForTwoMessage}
                </h3>
            </div>

            <div className="food-items-container">
                {restaurant &&
                    restaurant[ 3 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[ 1 ]?.card?.card
                        ?.itemCards?.map( ( food ) => (
                            <div key={food?.card?.info?.id} className="food-item">
                                {( food?.card?.info?.imageId ) ?
                                    ( <img
                                        src={IMG_CDN_URL + food?.card?.info?.imageId
                                        }
                                        alt={food?.card?.info?.name}
                                        className="food-item-image"
                                    /> ) :
                                    ( <img src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" className="food-item-image" /> )
                                }
                                <div className="food-item-name">Name: {food?.card?.info?.name}</div>
                                <div className="food-item-category">
                                    Category: {food?.card?.info?.category}
                                </div>
                                <div className="food-item-price">
                                    Price: {food?.card?.info?.price / 100}₹
                                </div>
                                <div className="food-item-veg-nonveg">
                                    Veg / Non-Veg: {food?.card?.info?.itemAttribute?.vegClassifier}
                                </div>
                                <div className="food-item-ratings">
                                    Ratings:{" "}
                                    {food?.card?.info?.ratings?.aggregatedRating?.rating} stars
                                </div>
                            </div>
                        ) )}
            </div>

        </div>
    );
};
