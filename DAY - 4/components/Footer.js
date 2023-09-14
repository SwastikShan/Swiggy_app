import { useEffect } from "react";
export const Footer = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );
    return (
        <footer className="w-full bg-gray-900 text-white py-4 flex items-center justify-center">
            <div className="container mx-auto flex justify-center items-center">
                <p className="text-sm">&copy; 2023 Food Villa by Shantanu. All rights reserved.</p>
            </div>
        </footer>
    );
};
