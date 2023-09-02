import { Link, useRouteError } from "react-router-dom"

export const Error = () => {
    const err = useRouteError();
    // console.log( err );
    return (
        <>
        <div className="error">
                <div className="flex items-center justify-center flex-col min-h-screen">
                    <h1 className="text-5xl mb-2">Umm you might be checking my website 🤔</h1>
                    <h2 className="mb-3 text-2xl">Never mind, your error code is {err.status} and its description is :  {err.statusText}</h2>
                    <Link to="/">
                        <button className="bg-blue-500 p-2 hover:bg-blue-400 rounded-full text-xl">Go back to Home</button>
                    </Link>
                </div>
           </div>
        </>
    )
}