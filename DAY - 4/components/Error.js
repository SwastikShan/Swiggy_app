import { useRouteError } from "react-router-dom"

export const Error = () => {
    const err = useRouteError();
    // console.log( err );
    return (
        <>
        <div className="error">
            <h1>Lavde kya milta yeh sab karke?</h1>
            <h2>Accha koi n tera error code {err.status} yeh hai aur uska description yeh hai :  {err.statusText}</h2>
            </div>
        </>
    )
}