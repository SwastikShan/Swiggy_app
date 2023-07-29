import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export const FoodItem = ( props ) => {
    const { data } = props;
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch( addItem( data ) );
    };

    const handleRemoveItem = () => {
        dispatch( removeItem( data.id ) );
    };

    return (
        <div className="w-full p-4 bg-white rounded-md shadow-md hover:shadow-xl transition duration-300">
            {/* image of restaurant / food */}
            <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
                {data?.imageId ? (
                    <img
                        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${ data?.imageId }`}
                        alt="food-logo"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200"></div>
                )}
            </div>
            <div className="text-center">
                {/* name of restaurant */}
                <h2 className="text-xl font-bold mb-2">{data?.name}</h2>
                {/* cuisines offered */}
                <p className="text-gray-600 text-base font-semibold mb-2">
                    Description: {data?.description}
                </p>
                {/* other details */}
                <p className="text-gray-600 text-base font-light">
                    Category: {data?.category}
                </p>
                <p className="text-gray-600 text-base font-light">
                    Price: {data?.price || data?.defaultPrice ? `${ ( data?.price || data?.defaultPrice ) / 100 }₹` : "Not available"}
                </p>
                <p className="text-gray-600 text-base font-light">id: {data?.id}</p>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleAddItem}
                >
                    Add More
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-2 rounded-full"
                    onClick={handleRemoveItem}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};
