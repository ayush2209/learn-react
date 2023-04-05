import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// External Components
import Header from "./Componenet/Header";
import Body from "./Componenet/Body";
import Footer from "./Componenet/Footer";

// App Page
const AppLayout = () => (
    <div className='app-Conatiner'>
        <Header />
        <Body />
        <Footer />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
