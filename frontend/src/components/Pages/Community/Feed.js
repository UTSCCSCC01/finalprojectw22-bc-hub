import CommunityPost from "./FeedCard"
import SearchBar from '../../SearchBar/SearchBar';
import filterFunction from './CommunitySearch';
import React, {useEffect, useState } from 'react';



const Feed = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState({loggedIn: false, user: null})
    console.log(props.posts)
    
    let feedType = props.feed
    if (props.feed === "trending-feed"){
        feedType = "Trending Feed"
    } else if (props.feed === 'personal-feed'){
        feedType = "Personal Feed"
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
            
            <h1 className="text-center" id="feed-title">{feedType}</h1>
            <div>
                <SearchBar butFun = {() => null} inFun={filterFunction} param={props.posts} inVal={null} text={"Search post"} haveBut={false} />
            </div>
            {feedType === 'Personal Feed' && !props.posts.length && 
                <h3>
                    Your Personal Feed is empty. Follow more users to populate your feed
                </h3>
            }
            {feedType === 'Trending Feed' && !props.posts.length && 
                <h3>
                    Looks like no one has posted anything :(
                </h3>
            }
            {
                feedType !== 'Personal Feed' && feedType !== 'Trending Feed' && !props.posts.length &&
                <h3>
                    No posts yet
                </h3>
            }
            <h3 id='no-results'></h3>
            <div className='mt-4'>
                {props.posts.map((post) => (
                    <div id={post._id}><CommunityPost post={post} key={post._id} isLoggedIn={isLoggedIn} /></div>
                ))}
            </div>
        </div>
    );
}
 
export default Feed;