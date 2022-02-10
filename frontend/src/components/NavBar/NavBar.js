import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './BC LOGO.png'
import './NavBar.css';

// setting Nav Bar from bootstrap
function NavBar() {
    return (
        <div className='NavFont'>
            <Navbar bg="bgcolor" variant='dark' sticky='top'>       
                <Navbar.Brand>
                    <a href='/'>
                        <button className='logoButt' >
                            <img src={logo} width="40px" height={"40px"} />
                        </button>
                    </a>
                
                </Navbar.Brand>

                <Nav>
                    <Nav.Link href='news'>News</Nav.Link>
                    <Nav.Link href='market'>Market</Nav.Link>
                    <Nav.Link href='education'>Learn</Nav.Link>
                    <Nav.Link href='community'>Community</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
} // Naviagtion link 23-26
export default NavBar;
