import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

// External Components
import Header from "./Componenet/Header";
import Body from "./Componenet/Body";
import Footer from "./Componenet/Footer";
import About from "./Componenet/About";
import WildCardRouter from "./Componenet/WildCardRouter";
import ContactUsComponent from "./Componenet/Contact";
import RestaurantDetails from "./Componenet/RestaurantsDetails";

// App Page
const AppLayout = () => (
    <div className='app-Conatiner'>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        errorElement: <WildCardRouter />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact-us",
                element: <ContactUsComponent />,
            },
            {
                path: "restaurant/:id",
                element: <RestaurantDetails />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
