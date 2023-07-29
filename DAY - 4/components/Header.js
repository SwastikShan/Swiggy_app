import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import "animate.css";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
    return (
        <a href="/" className="text-4xl font-bold text-white animate__animated animate__heartBeat">
            Swiggie
        </a>
    );
};

export const HeaderComponent = () => {
    const [ loggedIn, setLoggedIn ] = useState( false );
    const isOnline = useOnline();

    const { user } = useContext( UserContext );

    const onClickHandler = () => {
        setLoggedIn( !loggedIn );
    };

    const cartItems = useSelector( ( store ) => store.cart.items );
    console.log( cartItems );

    return (
        <div className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-100 shadow-lg font-bold text-xl sticky top-0 z-10">
            <Title />
            <div className="flex space-x-4">
                <ul className="flex space-x-4">
                    <Link to="/">
                        <li className="hover:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="hover:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp">About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li className="hover:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp">Contact Us</li>
                    </Link>
                    <Link to="/instamart">
                        <li className="hover:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp">Instamart</li>
                    </Link>

                    <Link to="/cart" className="hover:hover:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp">
                        <div className="relative">
                            <span className="bg-red-500 rounded-full text-white absolute -top-2 -right-6 px-2 py-1 text-xs">
                                {cartItems.length}
                            </span>
                            Cart
                        </div>
                    </Link>

                    {/* <li className="bg-green-600 text-white rounded-md py-2 px-4 animate__animated animate__bounceInUp">{user.name}</li> */}

                    <li className="py-2 px-4">
                        {isOnline ? (
                            <h2 className="text-green-700 animate__animated animate__bounceIn animate__delay-1s">Online 🟢</h2>
                        ) : (
                            <h2 className="text-red-500 animate__animated animate__bounceIn animate__delay-1s bg-yellow-200 rounded-md p-1">
                                Offline 🔴
                            </h2>
                        )}
                    </li>
                </ul>
                <button
                    className={`py-2 px-4 rounded-md animate__animated ${ loggedIn ? "bg-red-600 animate__tada" : "bg-green-600 animate__heartBeat"
                        } animate__delay-2s text-white`}
                    onClick={onClickHandler}
                >
                    {loggedIn ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    );
};
