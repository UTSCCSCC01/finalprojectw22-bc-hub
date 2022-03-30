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
import {useState, useEffect} from 'react';
const Userprofile = () => {
    // const {data: User, isLoading}  = useFetch('http://localhost:5000/users/62410e5e4578638ec14e6fff/');
    const [User, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
                    setUser(data.user)
                    setIsLoading(false);
                } else {
                    setUser(null)
                }
            })
            .catch(err => {console.log(err); setIsLoading(false); })
        } else {
            setUser(null)
        }
    }, []) 

    if (isLoading) {
        return(<div><h1>Loading Profile Page...</h1></div>);
    } 
 
    var userID = User._id;
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
    
    


    // console.log('Testing end');
    return (
        <div >
            <NavBar/>
            <ProfileSideBar/>
            <Col className='col-9 ' style={{marginLeft: 300}}>
                <Profilemain userName={userName} userNickName={userNickName} userId={userID} profilePic ={userPic} 
                postNum={userPosts.length} followerNum={userFollowers.length} 
                followingNum={userFollowings.length}
                emailAddr={userEmail}/>
                <Currency/>
                <Learnprogress Progresses={userLearnProgress}/>
                <UserPost/>
            </Col>
            
        </div>
    );
}

export default Userprofile;
