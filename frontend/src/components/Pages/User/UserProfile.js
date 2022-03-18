import React from 'react';
import NavBar from '../../NavBar/NavBar';
import ProfileSideBar from './ProfileSidebar';
import './User.css';
import Profilemain from './ProfileMain';
import Currency from './Currency';
import { Col } from 'react-bootstrap';
import Learnprogress from './LearnProgress';
import UserPost from './UserPost';
import useFetch from '../../../hooks/useFetch';

const Userprofile = () => {
    const {data: User, isLoading}  = useFetch('http://localhost:5000/users/6233964b951fe3f4ff65f833/');

    if (isLoading) {
        return(<div><h1>Loading Profile Page...</h1></div>);
    } 
    
    var  userID = User._id;
    var userName = User.username;
    var userEmail = User.email;
    var userNickName = User.name;
    var userPic = User.profilePicture;
    var userFollowers = User.followers;
    var userFollowings = User.followingUsers;
    var userFollowCryptos = User.followingCryptos;
    var userFollowNFTs = User.followingNFTs;
    var userPosts = User.Posts;
    var userComments = User.comments;
    var userLearnProgress = User.educationProgress;

    // console.log('Testing purpose');
    // console.log(User);
    // console.log(userID);
    // console.log(userName);
    // console.log(userEmail);
    // console.log(userNickName);
    // console.log(userPic);
    // console.log(userFollowers);
    // console.log(userFollowings);
    // console.log(userFollowCryptos);
    // console.log(userFollowNFTs);
    // console.log(userPosts);
    // console.log(userComments);
    // console.log(userLearnProgress);
    
    


    console.log('Testing end');
    return (
        <div >
            <NavBar/>
            <ProfileSideBar/>
            <Col className='col-9 ' style={{marginLeft: 300}}>
                <Profilemain userName={userName} userNickName={userNickName} userId={userID} 
                postNum={userPosts.length} followerNum={userFollowers.length} 
                followingNum={userFollowings.length}
                emailAddr={userEmail}/>
                <Currency/>
                <Learnprogress/>
                <UserPost/>
            </Col>
            
        </div>
    );
}

export default Userprofile;
