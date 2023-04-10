// const headerLogo = require("../../assets/logo.jpg");

import {useState} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
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
                <Navbar.Brand as={Link} to={"/"} href='home'>
                    Hunger Hunt
                    {/* <div className='imgage-logo'>
                        <img
                            src={
                                "https://ik.imagekit.io/ytchderwk/learn-react/logo.jpg?updatedAt=1680775135867"
                            }
                            alt='logo not loaded'
                        />
                    </div> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        {/* Empty Nav for put rest on left side. */}
                    </Nav>

                    <Nav className='d-flex'>
                        <Nav.Link as={Link} to=''>
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to='/about'>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to='/contact-us'>
                            Contact Us
                        </Nav.Link>

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
                                    as={Link}
                                    to='/'
                                    onClick={() => {
                                        setLoginState(false);
                                    }}
                                >
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Button
                                variant='outline-none'
                                as={Link}
                                to='/login'
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
