import CommunityPost from "./FeedCard"
import SearchBar from '../../SearchBar/SearchBar';
import filterFunction from './CommunitySearch';


const Feed = (props) => {
    
    let feedType = "Personal Feed"
    if (props.feed === "trending-feed"){
        feedType = "Trending Feed"
    }
    
    return (  
        
        <div className="mt-2 d-flex flex-column align-items-center justify-content-center" style={{"flex-grow": "2", "overflow": "auto"}}>
            <SearchBar butFun = {() => null} inFun={filterFunction} param={props.posts} inVal={null} text={"Search post"} haveBut={false}/>
            <h1 className="text-center">{feedType}</h1>
            <div >
                {props.posts.map((post) => (
                    <div id={post._id}><CommunityPost post={post} /></div>
                ))}
            </div>
        </div>
    );
}
 
export default Feed;