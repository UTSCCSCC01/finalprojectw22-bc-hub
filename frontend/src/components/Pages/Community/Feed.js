import CommunityPost from "./FeedCard"

const Feed = (props) => {
    console.log(props)
    let feedType = "Personal Feed"
    if (props.feed === "trending-feed"){
        feedType = "Trending Feed"
    }
    return (  
        <div className="mt-2">
            <h1 className="text-center">{feedType}</h1>
            <div className="d-flex flex-column align-items-center">
                {props.posts.map((post) => (
                    <CommunityPost post={post}></CommunityPost>
                ))}
            </div>
        </div>
    );
}
 
export default Feed;