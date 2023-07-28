import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../utils/cartSlice";
const store = configureStore( {
    /* here i'll create slices */

    reducer: {
        cart: cartSlice,
    }
} );

export default store;

/* Remember 
1. if user will click on + button to add to cart, then
2. dispatching action is sent to call a
3. reducer function which 
4. updates the slices in store
*/


/* 
Steps i performed step by step : 
0. created store using configureStore and imported this from redux-toolkit library 
1. now provided my app to store - imported provider (named import from react-redux library) in App.js file
2. created a file under utils and named it store.js
3. imported store in App.js
4. wrapped the whole app inside provider and gave store value as store (that i imported from utils folder in step 3)
5. created a file named as cartSlice.js under utils folder
6. in cartSlice, i gave name, initial state, actions like addToCart, removeFromCart and clearCart and imported actions and reducers.
7. opened store.js and imported cartSlice in it and inserted inside reducer of store
*/