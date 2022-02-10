const Feed = (props) => {
    console.log(props)
    return (  
        <div>
            <h1>{props.feedType} Feed</h1>
            {props.posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <img src={post.image} alt="" />
                    <p>{post.vote_count} likes</p>
                </div>
            ))}
        </div>
    );
}
 
export default Feed;