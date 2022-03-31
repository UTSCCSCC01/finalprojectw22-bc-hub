import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileLink from './ProfileLink';
import { useState } from 'react';
import FollowButton from './FollowButton';

const Profilemain = ({userName, userNickName, userId, postNum, followerNum, followingNum, emailAddr, profilePic, isOwner, isLoggedIn}) => {
    const [openModal, setOpenModal] = useState(false);
    const attemptChangeAvatar = () => {
        console.log('blah bah blah',isOwner)
        if (isOwner){
            setOpenModal(true)
        }
    }

    return (
        <div id='ProfileMain'> 
        {openModal && <ProfileLink closeModal={setOpenModal} />}
            <Container className='d-flex align-items-center justify-content-center pt-5 ' align={"center"}>
                <a className=''>
                    <img className='square mx-5 rounded-cricle btn hov shadow' src={profilePic} alt = '' width={200} height={200} onClick={attemptChangeAvatar} />
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
                <div className="d-flex justify-content-between">
                    <h2>{userName}</h2>
                    {isLoggedIn.loggedIn && isLoggedIn.user._id !== userId && <FollowButton user={isLoggedIn.user} id={userId}/>}
                </div>
                <h5 style={{fontStyle: 'italic', color:'grey'}}>{userNickName}</h5>
                {isOwner && 
                    <>
                        <h5>ID: {userId}</h5>
                        <h5>email: {emailAddr}</h5>
                    </>
                }   
            </div>

            <hr style={{zIndex: -2}}/>

            
        </div>
    );
}

export default Profilemain;
