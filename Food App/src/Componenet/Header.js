const headerLogo = require("../../assets/logo.jpg");
// Header Component
const Header = () => (
    <div className='header-Item'>
        <div className='imgage-logo'>
            <img src={headerLogo} alt='logo not loaded' />
        </div>
        <div className='menu-list'>
            <ul>
                <li>Home</li>
                <li>Restaurants</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>
                    <i className='fa-solid fa-cart-shopping'></i>
                </li>
                <li>
                    <i className='fa fa-thin fa-user'></i>
                </li>
            </ul>
        </div>
    </div>
);

export default Header;
