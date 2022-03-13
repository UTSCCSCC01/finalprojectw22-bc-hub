import React from 'react';
import NavBar from '../../NavBar/NavBar';
import ProfileSideBar from './ProfileSidebar';
import './User.css';
import Profilemain from './ProfileMain';
import Currency from './Currency';
import { Col } from 'react-bootstrap';
import Learnprogress from './LearnProgress';
import UserPost from './UserPost';
const Userprofile = () => {
    return (
        <div >
            
            <NavBar/>
            
            <ProfileSideBar/>
            <Col className='col-9 ' style={{marginLeft: 300}}>
                <Profilemain/>
                <Currency/>
                <Learnprogress/>
                <UserPost/>
            </Col>
            
        </div>
    );
}

export default Userprofile;
