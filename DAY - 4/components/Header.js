import { useState } from "react";

const Title = () => {
    const [ title, setTitle ] = useState( "Uncle Ji Paani Pila Dijiye..." );

    return (
        <>
            <a href="/" className="hello">
                <h1 id="title" key="h2">
                    Food Villa
                </h1>
            </a>
            <h1>{title}</h1>
            <button onClick={() => {

                if ( title === "Uncle Ji Paani Pila Dijiye..." ) {
                    setTitle( "Mera Gala Sookh Rha Hai...." )
                }
                else {
                    setTitle( "Uncle Ji Paani Pila Dijiye..." )
                }

            }}>Pr Kyu Bhai?</button>
        </>
    )
}

export const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};