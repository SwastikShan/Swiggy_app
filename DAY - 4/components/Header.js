import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink for active styling
import useOnline from "../utils/useOnline";
import "animate.css";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
    return (
        <a
            href="/"
            className="text-4xl font-bold text-white"
        >
            Swiggie
        </a>
    );
};

export const HeaderComponent = () => {
    const [ loggedIn, setLoggedIn ] = useState( false );
    const [ menuOpen, setMenuOpen ] = useState( false );
    const isOnline = useOnline();
    const { user } = useContext( UserContext );
    const cartItems = useSelector( ( store ) => store.cart.items );
    console.log( cartItems );

    const toggleMenu = () => {
        setMenuOpen( !menuOpen );
    };

    const closeMenu = () => {
        setMenuOpen( false );
    };

    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-400 shadow-lg font-bold text-xl sticky top-0 z-10">
            <div className="flex items-center space-x-4">
                <button
                    className={`text-white text-3xl lg:hidden ${ menuOpen ? "animate__rotate-180" : ""
                        }`}
                    onClick={toggleMenu}
                >
                    &#9776; {/* Hamburger icon */}
                </button>
                <Title />
            </div>

            <div
                className={`${ menuOpen ? "block" : "hidden"
                    } lg:block lg:flex space-x-4 lg:space-x-8 lg:space-y-0 flex-col lg:flex-row justify-end items-center`}
            >
                <ul className="flex space-x-4 flex-col lg:flex-row">
                    <NavLink
                        to="/"
                        exact
                        className="hover:bg-white active:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp"
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="hover:bg-white active:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp"
                        onClick={closeMenu}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="hover:bg-white active:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp"
                        onClick={closeMenu}
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/instamart"
                        className="hover:bg-white active:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp"
                        onClick={closeMenu}
                    >
                        Instamart
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className="hover:hover:bg-white active:bg-white rounded-full py-2 px-4 animate__animated animate__bounceInUp"
                        onClick={closeMenu}
                    >
                        <div className="relative">
                            <span className="bg-red-500 rounded-full text-white absolute -top-2 -right-6 px-2 py-1 text-xs">
                                {cartItems.length}
                            </span>
                            Cart
                        </div>
                    </NavLink>
                </ul>
                <button
                    className={`py-2 px-4 rounded-md animate__animated ${ loggedIn ? "bg-red-600 animate__tada" : "bg-green-600 animate__heartBeat"
                        } animate__delay-2s text-white`}
                    onClick={() => {
                        setLoggedIn( !loggedIn );
                        closeMenu(); // Close menu on login/logout
                    }}
                >
                    {loggedIn ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    );
};
