/* used in body.js inside component folder */
export function filterRestaurant( searchText, restaurantz ) {
    return restaurantz.filter( ( restaurant ) =>
        restaurant?.info?.name?.toLowerCase()?.includes( searchText?.toLowerCase() )
    );
}