import React, { Component, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Feed from './Feed';

const Community = () => {
    const {data: communityPosts, isLoading, error}  = useFetch('http://localhost:5000/community/personal-feed');

    return (  
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading posts...</div>}
            {communityPosts && <Feed posts={communityPosts} feedType="Personal"></Feed>}
        </div>
    );
}
 
export default Community;