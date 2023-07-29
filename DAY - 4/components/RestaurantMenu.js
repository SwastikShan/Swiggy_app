import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Config";
import { Shimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export const RestaurantMenu = () => {
    const { resId } = useParams();
    // console.log( `This is your params : ${ resId }` );

    const restaurant = useRestaurant( resId );

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch( addItem( item ) );
    }

    const handleRemoveItem = ( item ) => {
        dispatch( removeItem( item ) );
    }

    return !restaurant ? (
        <Shimmer />
    ) : (
        <div className="px-4 md:px-8 lg:px-16 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    {restaurant?.[ 0 ]?.card?.card?.info.cloudinaryImageId ? (
                        <img
                            src={IMG_CDN_URL + restaurant?.[ 0 ]?.card?.card?.info.cloudinaryImageId}
                            alt=""
                            className="w-full h-64 md:h-80 rounded-md object-cover shadow-md"
                        />
                    ) : (
                        <img
                            src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
                            alt=""
                            className="w-full h-64 md:h-80 rounded-md object-cover shadow-md"
                        />
                    )}
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl md:text-5xl font-bold mb-2">
                        {restaurant?.[ 0 ]?.card?.card?.info?.name}
                    </h1>
                    <p className="text-gray-600 text-xl md:text-base">
                        Cuisines: {restaurant?.[ 0 ]?.card?.card?.info?.cuisines.join( ", " )}
                    </p>
                    <p className="text-gray-600 text-xl md:text-base">
                        Ratings: {restaurant?.[ 0 ]?.card?.card?.info?.avgRating}
                    </p>
                    <p className="text-gray-600 text-xl md:text-base">
                        Area: {restaurant?.[ 0 ]?.card?.card?.info?.areaName},{" "}
                        {restaurant?.[ 0 ]?.card?.card?.info?.city}
                    </p>
                    <p className="text-gray-600 text-xl md:text-base">
                        Cost for two: {restaurant?.[ 0 ]?.card?.card?.info?.costForTwoMessage}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {restaurant &&
                        restaurant[ 2 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
                        ?.itemCards?.map( ( food ) => (
                            <div key={food?.card?.info?.id} className="border border-gray-200 rounded-md p-4">
                                {food?.card?.info?.imageId ? (
                                    <img
                                        src={IMG_CDN_URL + food?.card?.info?.imageId}
                                        alt={food?.card?.info?.name}
                                        className="w-full h-40 rounded-md object-cover shadow-md mb-4"
                                    />
                                ) : (
                                    <img
                                        src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
                                        alt={food?.card?.info?.name}
                                        className="w-full h-40 rounded-md object-cover shadow-md mb-4"
                                    />
                                )}
                                <h3 className="text-xl font-semibold mb-2">{food?.card?.info?.name}</h3>
                                <p className="text-gray-600 text-lg mb-2">
                                    Category: {food?.card?.info?.category}
                                </p>
                                <p className="text-green-600 font-semibold mb-2">
                                    <p className="text-green-600 font-semibold mb-2">
                                        Price: {food?.card?.info?.price || food?.card?.info?.defaultPrice ? `${ ( food?.card?.info?.price || food?.card?.info?.defaultPrice ) / 100 }₹` : "Not available"}
                                    </p>

                                    {console.log(`price : ${food?.card?.info?.price}`)}
                                </p>
                                <p className="text-gray-600 text-sm mb-2">
                                    Veg / Non-Veg:{" "}
                                    {food?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                                        <span role="img" aria-label="Veg" className="text-green-600">
                                            🥗 Veg
                                        </span>
                                    ) : (
                                        <span role="img" aria-label="Non-Veg" className="text-red-600">
                                            🍗 Non-Veg
                                        </span>
                                    )}
                                </p>
                                <p className="text-yellow-600 font-semibold mb-2">
                                    Ratings: {food?.card?.info?.ratings?.aggregatedRating?.rating} stars
                                </p>
                                <p className="text-gray-600 text-sm mb-2">
                                    Description: {food?.card?.info?.description}
                                </p>
                                <div className="flex justify-center mt-4">
                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={() => handleAddItem( food?.card?.info )}
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-2 rounded-full"
                                        onClick={() => handleRemoveItem( food?.card?.info?.id )}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ) )
                }
            </div>
        </div>
    );
};
