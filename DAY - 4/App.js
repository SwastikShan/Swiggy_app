import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error } from "./components/Error";
import Contact from "./components/Contact";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Profile } from "./components/Profile";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const Instamart = lazy( () => import( "./components/Instamart" ) );
const AboutUs = lazy( () => import( "./components/About" ) );

const AppLayout = () => {
    const [ user, setUser ] = useState( {
        name: "Ashutosh Kumar",
        email: "ashu.kumarexam@gmail.com",
    })
    return (
        <Provider store={store}>
        <div className="flex flex-col min-h-screen">
            <UserContext.Provider value={
                {
                    user: user,
                    setUser: setUser,
                }
            }>
                
                <HeaderComponent />
                <Outlet className="flex-1" />
                <Footer></Footer>
            </UserContext.Provider>
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter( [
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}>
                    <AboutUs />
                </Suspense>,
                errorElement: <Error />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}>
                    <Instamart />
                </Suspense>
            }
        ]
    },
] );

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render( <RouterProvider router={appRouter} /> );