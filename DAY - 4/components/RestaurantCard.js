import UserContext from "../utils/UserContext";
import { useContext } from "react";
export const RestaurantCard = ( props ) => {
    const { data } = props;
    const { user } = useContext( UserContext );
    return (
        <div className="w-96 h-96 p-4 m-4 bg-white rounded-md shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
            {/* image of restaurant / food */}
            <div className="w-full h-44 mb-4 rounded-md overflow-hidden aspect-w-16 aspect-h-9">
                {data?.cloudinaryImageId ? (
                    <img
                        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${ data?.cloudinaryImageId }`}
                        alt="food-logo"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200"></div>
                )}
            </div>
            <div className="text-center flex flex-col justify-center flex-1">
                {/* name of restaurant */}
                <h2 className="text-xl font-bold mb-2">{data?.name}</h2>
                {/* cuisines offered */}
                <p className="text-gray-600 text-base font-semibold truncate">
                    Cuisines: <span className="whitespace-normal">{data?.cuisines.join( ", " )}</span>
                </p>
                {/* ratings */}
                <p className="text-gray-600 text-base font-light truncate">Ratings: {data?.avgRating} stars</p>
                <p className="text-gray-600 text-base font-light truncate">
                    Area: <span className="whitespace-normal">{data?.areaName}, {data?.locality}</span>
                </p>
                <p className="text-gray-600 text-base font-light truncate">Cost for two: {data?.costForTwo}</p>
                <p className="text-gray-600 text-base font-light bg-slate-200 rounded-md p-1">User's name: {user.name} - {user.email}</p>
            </div>
        </div>
    );
};
