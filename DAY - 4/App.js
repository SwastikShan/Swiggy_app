import React, { lazy, Suspense } from "react";
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

const Instamart = lazy( () => import( "./components/Instamart" ) );
const AboutUs = lazy( () => import( "./components/About" ) );

const AppLayout = () => {
    return (
        <>
            <>
                <HeaderComponent />
                <Outlet />
                <Footer></Footer>
            </>
        </>
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