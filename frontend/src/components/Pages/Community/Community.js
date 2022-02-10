import React, { Component, useEffect, useState } from 'react';
import useFetch from "../../../hooks/useFetch"

import NavBar from '../../NavBar/NavBar';
import Feed from './Feed';
import CommunitySideBar from './CommunitySidebar';

const Community = (props) => {
    const {data: communityPosts, isLoading, error}  = useFetch('http://localhost:5000/community/' + props.feed);

    return (  
        <div>
            <NavBar/>
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