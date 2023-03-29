import React from "react";
import  ReactDOM  from "react-dom/client";
const headerLogo = require('./assets/logo.jpg');

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Header Component

const Header = () => (
    <div className="header-Item">
        <div className="imgage-logo">
            <img src={headerLogo} alt="logo not loaded" />
        </div>
        <div className="menu-list">
            <ul>
                <li>Home</li>
                <li>Restaurants</li>
                <li>About</li>
                <li>Contact Us</li>
                <li><i class="fa-solid fa-cart-shopping"></i></li>
            </ul>
        </div>
    </div>
)



// App Page
const AppLayout = () => (
    <div className="app-Conatiner">
        <Header />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);