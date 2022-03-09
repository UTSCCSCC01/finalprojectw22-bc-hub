import React from 'react';
import NavBar
 from '../../NavBar/NavBar';
import ProfileSideBar from './ProfileSidebar';
import { Container, Col, Row } from 'react-bootstrap';
const Userprofile = () => {
    return (
        <div>
            
            <NavBar/>

                <Col>
                    <ProfileSideBar/>
                </Col>

                <Col>
                    <h1>Test</h1>
                </Col>

    
           
        </div>
    );
}

export default Userprofile;
