import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: ( state, action ) => {
            state.items.push( action.payload );
        },
        removeItem: ( state, action ) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter( item => item.id !== itemIdToRemove );
        },
        clearCart: ( state ) => {
            state.items = [];
        }
    },
} );

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;


// reducers nahi, reducer likhna hoga + upar reducers theek hai
export default cartSlice.reducer;