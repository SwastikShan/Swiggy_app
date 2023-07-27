import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import "animate.css";
import UserContext from "../utils/UserContext";

const Title = () => {
    return (
        <a href="/" className="text-4xl font-bold text-white animate__animated animate__heartBeat">
            Food Villa
        </a>
    );
};

export const HeaderComponent = () => {
    const [ loggedIn, setLoggedIn ] = useState( false );
    const isOnline = useOnline();

    const {user} = useContext(UserContext);

    const onClickHandler = () => {
        setLoggedIn( !loggedIn );
    };

    return (
        <div className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-800 shadow-lg font-bold text-xl sticky top-0 z-10">
            <Title />
            <div className="flex space-x-4">
                <ul className="flex space-x-4">
                    <Link to="/">
                        <li className="hover:bg-green-400/80 rounded-md py-2 px-4 animate__animated animate__bounceInUp">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="hover:bg-green-400/80 rounded-md py-2 px-4 animate__animated animate__bounceInUp">About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li className="hover:bg-green-400/80 rounded-md py-2 px-4 animate__animated animate__bounceInUp">Contact Us</li>
                    </Link>
                    <Link to="/instamart">
                        <li className="hover:bg-green-400/80 rounded-md py-2 px-4 animate__animated animate__bounceInUp">Instamart</li>
                    </Link>
                    <li className="hover:bg-green-400/80 rounded-md py-2 px-4 animate__animated animate__bounceInUp">Cart</li>
                    <li className="bg-green-600 text-white rounded-md py-2 px-4 animate__animated animate__bounceInUp">{user.name}</li>
                    <li className="py-2 px-4">
                        {isOnline ? (
                            <h2 className="text-green-500 animate__animated animate__bounceIn animate__delay-1s">Online 🟢</h2>
                        ) : (
                            <h2 className="text-red-500 animate__animated animate__bounceIn animate__delay-1s">Offline 🔴</h2>
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
