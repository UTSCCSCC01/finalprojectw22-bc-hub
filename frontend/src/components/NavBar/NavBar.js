import React from 'react';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './BC LOGO.png'
import avatar from './Profile.png'
import './NavBar.css';

// setting Nav Bar from bootstrap
function NavBar() {
    return (
        // <div className='NavFont'>
            <Navbar className='fixed-top' bg="bgcolor" variant='dark' sticky='top'>
                

                
                <Navbar.Brand>
                    <a href='/' >
                        <button className='logoButt' style={{marginLeft: 20}}>
                            <img src={logo} width="40px" height={"40px"} alt="" />
                        </button>
                    </a>

                </Navbar.Brand>
        
                <Nav>
                    <Nav.Link href='/news'>News</Nav.Link>
                    <Nav.Link href='/market'>Market</Nav.Link>
                    <Nav.Link href='/education'>Learn</Nav.Link>
                    {/* <Nav.Link href='community'>Community</Nav.Link> */}
                    <NavDropdown title="Community" id="community-nav-dropdown">
                        <NavDropdown.Item href="/community/personal-feed">Personal Feed</NavDropdown.Item>
                        <NavDropdown.Item href="/community/trending-feed">Trending Feed</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
         
                <Nav className='ms-auto' style={{marginRight: 10}}>
                    <Nav.Link href='/profile'>
                        <img src={avatar} width='40px' height= "40px" alt="" />
                    </Nav.Link>
                </Nav>
                
            </Navbar>
        // </div>
    );
} // Naviagtion link 23-26
export default NavBar;