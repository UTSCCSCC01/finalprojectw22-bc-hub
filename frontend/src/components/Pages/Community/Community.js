import React, { Component, useEffect, useState } from 'react';
import useFetch from "../../../hooks/useFetch"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import NavBar from '../../NavBar/NavBar';
import Feed from './Feed';
import CommunitySideBar from './CommunitySidebar';
import MakePost from './MakePost';
import HttpTest from './HttpTest';

const Community = (props) => {
    const {data: communityPosts, isLoading, error}  = useFetch('http://localhost:5000/community/' + props.feed);
    const [openModal, setOpenModal] = useState(false);
    return (  
        <div>
            <HttpTest/>
            <NavBar/>
            {openModal && <MakePost closeModal={setOpenModal} />}
            <Button variant= 'dark' className={'mt-4 shadow'}size = "lg" style={{padding: 15, borderRadius : 100, position: 'fixed', bottom: 100, right: 100, zIndex:10}} 
            onClick={() => {setOpenModal(true)}}>
                Create Post
            </Button>

            
            <div>
                <CommunitySideBar/>
                {error && <div>{error}</div>}
                {isLoading && <div>Loading posts...</div>}
                {communityPosts && <Feed posts={communityPosts} feed={props.feed}></Feed>} 
            </div>
        </div>
    );
}


 
export default Community;