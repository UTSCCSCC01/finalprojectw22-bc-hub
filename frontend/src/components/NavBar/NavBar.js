import React from 'react';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './BC LOGO.png'
import avatar from './Profile.png'
import './NavBar.css';
import { useEffect } from 'react';
import { useState } from 'react';

// setting Nav Bar from bootstrap
function NavBar() {

    const [authInfo, setAuthInfo] = useState({isLoggedIn: false, user: null})

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            fetch('http://localhost:5000/loggedIn/', {
                headers: {
                    'x-access-token': token,
                }
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if(data.status === 200){
                    setAuthInfo({isLoggedIn: true, user: data.user})
                } else {
                    setAuthInfo({isLoggedIn: false, user: null})
                }
            })
            .catch(err => console.log(err))
        } else {
            setAuthInfo({isLoggedIn: false, user: null})
        }
    }, [])

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
                    <Nav.Link href='/community/trending-feed'>Community</Nav.Link>
                    {/* <NavDropdown title="Community" id="community-nav-dropdown">
                        <NavDropdown.Item href="/community/personal-feed">Personal Feed</NavDropdown.Item>
                        <NavDropdown.Item href="/community/trending-feed">Trending Feed</NavDropdown.Item>
                    </NavDropdown> */}
                    {authInfo.isLoggedIn ? <Nav.Link href='/logout'>Log Out</Nav.Link> : <Nav.Link href='/login'>Log In</Nav.Link>}
                    {!authInfo.isLoggedIn && <Nav.Link href='/register'>Register</Nav.Link>}
                </Nav>
         
                <Nav className='ms-auto' style={{marginRight: 10}}>
                    {authInfo.isLoggedIn && <Nav.Link href='/profile'>
                        <img className=' Navsquare' src={authInfo.user.profilePicture} alt="" />
                    </Nav.Link>}
                </Nav>
                
            </Navbar>
        // </div>
    );
} // Naviagtion link 23-26
export default NavBar;