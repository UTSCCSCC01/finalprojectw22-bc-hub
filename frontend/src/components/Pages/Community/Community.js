import React, { Component, useEffect, useState } from 'react';
import useFetch from "../../../hooks/useFetch"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import NavBar from '../../NavBar/NavBar';
import Feed from './Feed';
import CommunitySideBar from './CommunitySidebar';
import MakePost from './MakePost';
import { useNavigate } from 'react-router-dom';

const Community = (props) => {
    const navigate = useNavigate()
    if(props.feed === "personal-feed"){
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
                if(data.status !== 200){
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
        } else {
            navigate('/login')
        }   
    }
    const {data: communityPosts, isLoading, error}  = useFetch('http://localhost:5000/community/' + props.feed);
    const [openModal, setOpenModal] = useState(false);

    
    if (isLoading) {
        return(<div></div>)
    }

    return (  

        <div>
            <NavBar/>
            
            <div className="d-flex">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading posts...</div>}
                {communityPosts && <Feed posts={communityPosts} feed={props.feed}></Feed>}
                <CommunitySideBar/>
            </div>
        </div>
    );
}


 
export default Community;