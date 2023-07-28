import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name: 'cart',
    initialState: {
        items: [ "Panner", "Protein Powder" ],
    },
    reducers: {
        /* addItem is a reducer function and this is the place where i'll get my items which i want to add in my cart */
        addItem: ( state, action ) => {
            state.items.push( action.payload );
        },
        removeItem: (state, action) => {
            state.items.pop(  );
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
} )

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// reducers nahi, reducer likhna hoga + upar reducers theek hai
export default cartSlice.reducer;