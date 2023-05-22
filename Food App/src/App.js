import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// External Components
import Header from "./Componenet/Header";
import Body from "./Componenet/Body";
import Footer from "./Componenet/Footer";
import About from "./Componenet/About";
import WildCardRouter from "./Componenet/WildCardRouter";
import ContactUsComponent from "./Componenet/Contact";
import RestaurantDetails from "./Componenet/RestaurantsDetails";
import LogInForm from "./Componenet/Form";
import Profile from "../../Episode 08 : Lets get classy/Component/ClassBasesComponent";
import AboutClassBasedComponent from "./Componenet/About";

// App Page
const AppLayout = () => (
    <div className='app-Conatiner'>
        <Header />
        <Outlet />
        <Footer />
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
                element: <AboutClassBasedComponent />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                ],
            },
            {
                path: "/contact-us",
                element: <ContactUsComponent />,
            },
            {
                path: "restaurant/:id",
                element: <RestaurantDetails />,
            },
            {
                path: "login",
                element: <LogInForm />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
