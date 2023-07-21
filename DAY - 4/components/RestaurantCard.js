export const RestaurantCard = ( props ) => {
    return (
        <div className="card">
            {/* image of restaurant / food */}
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.data?.cloudinaryImageId} alt="food-logo" />
            {/* name of restaurant */}
            <h2>{props.data?.name}</h2>
            {/* cuisines offered */}
            <h3>Cuisines : {props.data?.cuisines.join( ", " )}</h3>
            {/* ratings */}
            <h4>Ratings : {props.data?.avgRating} stars & rated by {props.data?.totalRatingsString}</h4>
            <h4>Address : {props.data?.areaName}, {props.data?.locality}</h4>
            <h4>Cost for two : {props.data?.costForTwo }</h4>
        </div>
    )
}