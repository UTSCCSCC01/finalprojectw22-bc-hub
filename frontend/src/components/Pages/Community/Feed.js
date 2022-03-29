import CommunityPost from "./FeedCard"
import SearchBar from '../../SearchBar/SearchBar';
import filterFunction from './CommunitySearch';
import React, {useEffect, useState } from 'react';



const Feed = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState({loggedIn: false, user: null})
    
    let feedType = "Personal Feed"
    if (props.feed === "trending-feed"){
        feedType = "Trending Feed"
    }

	useEffect(() => {
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
                    setIsLoggedIn({loggedIn: true, user: response.user})
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
        }
    }, []);
    
    return (  
        
        <div className="mt-2 d-flex flex-column align-items-center justify-content-center" style={{"flex-grow": "2", "overflow": "auto"}}>
            <SearchBar butFun = {() => null} inFun={filterFunction} param={props.posts} inVal={null} text={"Search post"} haveBut={false}/>
            <h1 className="text-center" id="feed-title">{feedType}</h1>
            <h3 id='no-results'></h3>
            <div className='mt-4'>
                {props.posts.map((post) => (
                    <div id={post._id}><CommunityPost post={post} isLoggedIn={isLoggedIn} /></div>
                ))}
            </div>
        </div>
    );
}
 
export default Feed;