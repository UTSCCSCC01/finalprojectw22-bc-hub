import CommunityPost from "./FeedCard"
import SearchBar from '../../SearchBar/SearchBar';

const Feed = (props) => {
    console.log(props)
    let feedType = "Personal Feed"
    if (props.feed === "trending-feed"){
        feedType = "Trending Feed"
    }
    return (  
        <div className="mt-2 d-flex flex-column align-items-center justify-content-center" style={{"flex-grow": "2", "overflow": "auto"}}>
            
            <h1 className="text-center">{feedType}</h1>
            <div >
                {props.posts.map((post) => (
                    <CommunityPost post={post}></CommunityPost>
                ))}
            </div>
        </div>
    );
}
 
export default Feed;