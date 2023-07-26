import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    // const [ title, setTitle ] = useState( "Uncle Ji Paani Pila Dijiye..." );

    return (
        <>
            <a href="/" className="hello">
                <h1 id="title" key="h2">
                    Food Villa
                </h1>
            </a>
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => {

                if ( title === "Uncle Ji Paani Pila Dijiye..." ) {
                    setTitle( "Mera Gala Sookh Rha Hai...." )
                }
                else {
                    setTitle( "Uncle Ji Paani Pila Dijiye..." )
                }

            }}>Pr Kyu Bhai?</button> */}
            {/* const isOnline = useOnline(); */}
        </>
    )
}

export const HeaderComponent = () => {
    const [ loggedIn, setLoggedIn ] = useState( false );
    const isOnline = useOnline();

    const onClickHandler = () => {
        if ( loggedIn ) {
            setLoggedIn( false );
        }
        else {
            setLoggedIn( true );
        }
    }
    return (
        <div className="flex p-10 justify-between bg-orange-600/80 shadow-lg font-bold text-xl h-3 items-center rounded-b-3xl top-0 sticky z-1">
            <Title />
            <div className="">
                <ul className="flex px-10">
                    <Link to="/">
                        <li className="px-4 hover:bg-green-400/80  hover:rounded-md active:bg-green-500/80 ">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="px-4 hover:bg-green-400/80  hover:rounded-md active:bg-green-500/80 ">
                            About Us
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="px-4 hover:bg-green-400/80 hover:rounded-md active:bg-green-500/80 ">
                            Contact Us
                        </li>
                    </Link>
                    <Link to="/instamart">
                        <li className="px-4 hover:bg-green-400/80  hover:rounded-md active:bg-green-500/80 ">
                            Instamart
                        </li>
                    </Link>
                    <li className="px-4 hover:bg-green-400/80 hover:rounded-md active:bg-green-500/80 ">
                        Cart
                    </li>

                    <li className="px-4">
                        {isOnline ? ( <h2 className="hover:bg-green-400/80 hover:rounded-md px-2 active:bg-green-500/80 ">Online 🟢</h2> ) : ( <h2 className="hover:bg-red-400/80 hover:rounded-md px-2 active:bg-green-500/80 ">Offline 🔴</h2> )}
                    </li>
                </ul>
            </div >
            {loggedIn ? (
                <button className="flex " onClick={onClickHandler}>Logout</button>
            ) : (
                <button className="flex " onClick={onClickHandler}>Login</button>
            )}
        </div>
    );
};