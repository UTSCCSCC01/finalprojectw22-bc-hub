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
import NotFoundPage from '../NotFoundPage';


const Userprofile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState({loggedIn: false, user: null})
    const [isOwner, setIsOwner] = useState(false)
    const params = useParams();
    const {data: User, isLoading, errorUser}  = useFetch('http://localhost:5000/users/username/' + params.username);
    console.log('http://localhost:5000/users/username/' + params.username);
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
                    setIsOwner(false)
                }
            })
            .catch(e1 => {
                console.log(e1)
                setIsLoggedIn({loggedIn: false, user: null})
                setIsOwner(false)
            })

		} else{
            setIsLoggedIn({loggedIn: false, user: null})
            setIsOwner(false)
            navigate('/logIn', { state: "You must be logged in to view other users' profiles!" })
        }
        setUserStatus(true)
    }, []);

    return (
        <div >
            {isLoading && <div><NavBar/><h1>Loading Profile Page...</h1></div>}
            {User && userStatus &&
                <>
                <NavBar/>
                <ProfileSideBar isOwner={isOwner}/>
                <Col className='col-9 ' style={{marginLeft: 300}}>
                    <Profilemain userName={User.username} userNickName={User.name} userId={User._id} profilePic ={User.profilePicture} 
                    followerNum={User.followers.length} 
                    followingNum={User.followingUsers.length}
                    emailAddr={User.email} isOwner={isOwner} isLoggedIn={isLoggedIn}/>
                    <Currency isOwner={isOwner} userCurrency={User.followingCryptos} isLoggedIn={isLoggedIn} userName={User.username}/>
                    <Learnprogress Progresses={User.educationProgress} isOwner={isOwner} isLoggedIn={isLoggedIn} username={User.username}/>
                    <UserPost userID={User._id} username={User.username} isOwner={isOwner} isLoggedIn={isLoggedIn}/>
                </Col>
                </>
                
            }
            {(!User || errorUser) && !isLoading && <NotFoundPage></NotFoundPage>}
        </div>
        
    );
}

export default Userprofile;
