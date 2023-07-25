import { useEffect, useState } from "react";

const useOnline = () => {

    const [ isOnline, setIsOnline ] = useState( navigator.onLine );
    
    useEffect( () => {

        const handleOnline = () => {
            setIsOnline( true );
        }
        const handleOffline = () => {
            setIsOnline( false );
        }
        /* if online */
        window.addEventListener( "online", handleOnline );
        /* if offline */
        window.addEventListener( "offline", handleOffline );

        /* clear cache */
        return () => {
            /* if online */
            window.removeEventListener( "online", handleOnline );
            /* if offline */
            window.removeEventListener( "offline", handleOffline );

        }
    }, [] );

    return isOnline; // if online return true, otherwise false
};

export default useOnline;