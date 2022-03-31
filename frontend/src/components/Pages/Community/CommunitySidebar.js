import { Button } from "react-bootstrap";
import { useState } from "react";
import MakePost from './MakePost';
import './communitySidebar.css';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const CommunitySideBar = () => {
    const [openModal, setOpenModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

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
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false)
                }
            })
            .catch(err => console.log(err))
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    const attemptCreatePost = () => {
        if (!isLoggedIn){
            navigate('/login', { state: "You must be logged in to create social media posts!" })
        } else{
            setOpenModal(true)
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center h-100" style={{"overflow": "hidden", "position": "fixed"}}>
            {isLoggedIn ? <div className='d-flex'>
                <a href="/community/personal-feed" className='btn d-flex hov'>
                    <i className="bi bi-person-circle me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>Personal Feed</h5>
                </a>
            </div> : <></>}
            <div className='d-flex'>
                <a href="/community/trending-feed" className='btn d-flex hov'>
                    <i className="bi bi-graph-up me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>Trending Feed</h5>
                </a>
            </div>
            {isLoggedIn ? <div className='d-flex'>
                <a href="#" className='btn d-flex hov'>
                    <i className="bi bi-sticky me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>My Posts</h5>
                </a>
            </div> : <></>}
            <div className='d-flex ps-3'>
            {openModal && <MakePost closeModal={setOpenModal} />}
                {isLoggedIn ? <Button variant= 'dark' className={'mt-4 w-100'}size = "lg" style={{padding: 15, borderRadius : 100, zIndex:10}} 
                onClick={() => {setOpenModal(true)}}>
                    Create Post
                </Button> : <></>}
            </div>       
            {/* <div className='d-flex ps-3'>
            {openModal && <MakePost closeModal={setOpenModal} />}
                <Button variant= 'dark' className={'mt-4 w-100'}size = "lg" style={{padding: 15, borderRadius : 100, zIndex:10}} 
                onClick={attemptCreatePost}>
                    Create Post
                </Button>
            </div>   */}
        </div>
        

    );
}

export default CommunitySideBar;