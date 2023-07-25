export const Shimmer = () => {
    const shimmerBoxes = Array.from( { length: 6 }, ( _, index ) => index ); // Change 6 to the desired number of shimmer boxes

    return (
        <div className="restaurant-list">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search By Restaurant Name..."
                // Add the required props or handlers if needed for the search input
                />
            </div>
            {shimmerBoxes.map( ( boxIndex ) => (
                <div className="card shimmer-card" key={boxIndex}>
                    <div className="shimmer-image"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                </div>
            ) )}
        </div>
    );
};
