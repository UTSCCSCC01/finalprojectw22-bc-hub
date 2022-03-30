import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileLink from './ProfileLink';
import { useState } from 'react';

const Profilemain = ({userName, userNickName, userId, postNum, followerNum, followingNum, emailAddr, profilePic}) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div id='ProfileMain'> 
        {openModal && <ProfileLink closeModal={setOpenModal} />}
            <Container className='d-flex align-items-center justify-content-center pt-5 ' align={"center"}>
                <a className=''>
                    <img className='square mx-5 rounded-cricle btn hov' src={profilePic} alt = 'Not Found'  width={200} height={200} onClick={() => setOpenModal(true)} />
                </a>
                

                <Col className='col-2' >
                    <h4>{postNum}</h4>
                    <h3 style={{fontWeight: 'normal'}}>Posts</h3>
                </Col>

                <Col className='col-2'>
                    <h4>{followerNum}</h4>
                    <h3 style={{fontWeight: 'normal'}}>Followers</h3>
                </Col>
                
                <Col className='col-2'>
                    <h4>{followingNum}</h4>
                    <h3 style={{fontWeight: 'normal'}}>Following</h3>
                </Col>

            </Container>
            <div style={{ marginTop: 50}}>
                <h2>{userName}</h2>
                <h5 style={{fontStyle: 'italic', color:'grey'}}>{userNickName}</h5>
                <h5>ID: {userId}</h5>
                <h5>email: {emailAddr}</h5>
            </div>
            <hr style={{zIndex: -2}}/>

            
        </div>
    );
}

export default Profilemain;
