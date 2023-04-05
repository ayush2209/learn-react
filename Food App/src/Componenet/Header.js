// import Button from "react-bootstrap/Button";
// import Stack from "react-bootstrap/Stack";

// const headerLogo = require("../../assets/logo.jpg");
// // Header Component
// const Header = () => (
//     <div className='header-Item'>
//         <div className='imgage-logo'>
//             <img src={headerLogo} alt='logo not loaded' />
//         </div>
//         <div className='menu-list'>
//             <ul>
//                 <li>Home</li>
//                 <li>Restaurants</li>
//                 <li>About</li>
//                 <li>Contact Us</li>
//                 <li>
//                     <i className='fa-solid fa-cart-shopping'></i>
//                 </li>
//                 <li>
//                     <i className='fa fa-thin fa-user'></i>
//                 </li>
//                 <Stack direction='horizontal' gap={2}>
//                     <Button as='a' variant='primary'>
//                         Button as link
//                     </Button>
//                     <Button as='a' variant='success'>
//                         Button as link
//                     </Button>
//                 </Stack>
//             </ul>
//         </div>
//     </div>
// );

// export default Header;

import {useState} from "react";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
    const [isLogin, setLoginState] = useState(false);
    const userName = "Ayush";
    return (
        <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
            <Container>
                <Navbar.Brand href='#home'>Hunger Hunt</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        {/* Empty Nav for put rest on left side. */}
                    </Nav>
                    <Nav className='d-flex'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#restaurants'>Restaurants</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#contact-us'>Contact Us</Nav.Link>
                        {isLogin ? (
                            <NavDropdown
                                align='end'
                                title={userName}
                                id='collasible-nav-dropdown'
                            >
                                <NavDropdown.Item href='#profile/3.1'>
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href='#profile/3.4'
                                    onClick={() => {
                                        setLoginState(false);
                                    }}
                                >
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Button
                                variant='outline-primary'
                                onClick={() => {
                                    setLoginState(true);
                                }}
                            >
                                Login
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;
