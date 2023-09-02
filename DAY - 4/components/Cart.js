import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector( ( store ) => store?.cart?.items );

  const calculateTotalPrice = () => {
    const subtotal = cartItems.reduce( ( total, item ) => total + item?.price, 0 ) / 100;
    const deliveryFees = 30; // Example delivery fees, you can calculate this dynamically
    const gst = subtotal * 0.1; // Example GST calculation (10% of subtotal)
    const serviceTax = subtotal * 0.05; // Example service tax calculation (5% of subtotal)
    const total = subtotal + deliveryFees + gst + serviceTax;

    return {
      subtotal: subtotal.toFixed( 2 ),
      deliveryFees: deliveryFees.toFixed( 2 ),
      gst: gst.toFixed( 2 ),
      serviceTax: serviceTax.toFixed( 2 ),
      total: total.toFixed( 2 ),
    };
  };

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch( clearCart() );
  };

  const priceBreakdown = calculateTotalPrice();

  useEffect( () => {
    window.scrollTo( 0, 0 );
  }, [] );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="../src/images/bg.png"
              alt="Empty Cart"
              className="w-80 h-80 mb-4"
            />
            <p className="text-2xl mt-3 text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cartItems.map( ( food ) => (
                <FoodItem key={food.id} data={food} />
              ) )}
            </div>
            <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-semibold">Total Items:</p>
                <p className="text-xl font-semibold">{cartItems?.length}</p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-semibold">Total Price:</p>
                <p className="text-xl font-semibold">{priceBreakdown.total} Rs.</p>
              </div>
              <div className="mb-2">
                <p className="text-lg font-semibold mb-2">Summary:</p>
                <ul>
                  {cartItems.map( ( food ) => (
                    <li key={food.id} className="text-gray-600 mb-1">
                      {food.name} - {food.price / 100} Rs.
                    </li>
                  ) )}
                </ul>
              </div>
              <div className="flex flex-col">
                {/* Price Breakdown */}
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">Subtotal:</p>
                  <p>{priceBreakdown.subtotal} Rs.</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">Delivery Fees:</p>
                  <p>{priceBreakdown.deliveryFees} Rs.</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">GST (10%):</p>
                  <p>{priceBreakdown.gst} Rs.</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">Service Tax (5%):</p>
                  <p>{priceBreakdown.serviceTax} Rs.</p>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2">
                  <p className="font-semibold">Total:</p>
                  <p>{priceBreakdown.total} Rs.</p>
                </div>
              </div>
              {/* Checkout and Clear Cart Buttons */}
                <div className="mt-4 flex space-x-4 items-center justify-end">
                  <button
                    className=" bg-red-600 text-white p-3 rounded-md font-semibold text-center transition duration-300 hover:bg-red-700"
                    onClick={() => handleClearCart()}
                  >
                    Clear Cart
                  </button>
                <Link to="/payment">
                  <button className="w-full bg-green-600 text-white p-3 rounded-md font-semibold text-center transition duration-300 hover:bg-green-700">
                    Checkout
                  </button>
                </Link>
                
              </div>
            </div>
          </>
        )}
      </div>
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">Your Footer Content Here</p>
      </footer>
    </div>
  );
};

export default Cart;
