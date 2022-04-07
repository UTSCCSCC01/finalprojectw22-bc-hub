import React from 'react';
import useFetch from "../../../hooks/useFetch"
import Feed from '../Community/Feed';

const Userpost = (props) => {
    const {data: userPosts, isLoading, error}  = useFetch('http://localhost:5000/community/user-posts/' + props.userID);
    var header = `${props.username}'s Posts`
    if (props.isOwner){
        header = `My Posts`
    }
    return (
        <div className="d-flex">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading posts...</div>}
                {userPosts &&
                    <>
                        <div style={{scrollMarginTop: '20rem'}} id='UserPost'></div>
                        <Feed posts={userPosts} id='UserPost' feed={header}></Feed>
                    </>
                }
        </div>
    );
}

export default Userpost;
