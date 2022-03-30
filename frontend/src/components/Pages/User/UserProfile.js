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
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom"


const Userprofile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState({loggedIn: false, user: null})
    const [isOwner, setIsOwner] = useState(false)
    const params = useParams();
    const {data: User, isLoading, errorUser}  = useFetch('http://localhost:5000/users/username/' + params.username);
    const [userStatus, setUserStatus] = useState(false)
    const navigate = useNavigate()


	useEffect(() => {
        // Check if the current user is logged in, and if this is their profile page
		const token = localStorage.getItem('token')
		if (token) {
            fetch('http://localhost:5000/loggedIn/', {
                headers: {
                    'x-access-token': token,
                },
            })
            .then(response => response.json())
            .then(response => {
                if (response.status === 200){
                    console.log(response.user.username)
                    console.log(params.username)
                    setIsLoggedIn({loggedIn: true, user: response.user})
                    setIsOwner(response.user.username === params.username)
                } else {
                    setIsLoggedIn({loggedIn: false, user: null})
                }
            })
            .catch(e1 => {
                console.log(e1)
                setIsLoggedIn({loggedIn: false, user: null})
            })

		} else{
            setIsLoggedIn({loggedIn: false, user: null})
            navigate('/logIn', { state: "You must be logged in to view other users' profiles!" })
        }
        setUserStatus(true)
    }, []);

    // if (isLoading || !isLoaded) {
    //     return(<div><h1>Loading Profile Page...</h1></div>);
    // } 
 
    // var userID = User._id;
    // var userName = User.username;
    // var userEmail = User.email;
    // var userNickName = User.name;
    // var userPic = User.profilePicture;
    // var userFollowers = User.followers;
    // var userFollowings = User.followingUsers;
    // var userFollowCryptos = User.followingCryptos;
    // var userFollowNFTs = User.followingNFTs;
    // var userPosts = User.Posts;
    // var userComments = User.comments;
    // var userLearnProgress = User.educationProgress;
 
    

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
            {(!isLoading && userStatus) ?
                <>
                <ProfileSideBar isOwner={isOwner}/>
                <Col className='col-9 ' style={{marginLeft: 300}}>
                    <Profilemain userName={User.username} userNickName={User.name} userId={User._id} profilePic ={User.profilePicture} 
                    postNum={User.Posts.length} followerNum={User.followers.length} 
                    followingNum={User.followingUsers.length}
                    emailAddr={User.email} isOwner={isOwner} isLoggedIn={isLoggedIn}/>
                    <Currency isOwner={isOwner} userID={User._id}/>
                    <Learnprogress Progresses={User.educationProgress} isOwner={isOwner}/>
                    <UserPost userID={User._id} username={User.username} isOwner={isOwner}/>
                </Col>
                </>
                :
                <div><h1>Loading Profile Page...</h1></div>
            }
        </div>
        
    );
}

export default Userprofile;
