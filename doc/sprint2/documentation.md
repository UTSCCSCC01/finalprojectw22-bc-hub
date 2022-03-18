# Documentation

Installation instructions can be found in the README.

## Database

The database (MongoDB) has multiple schemas. There is a user schema to represent the users of the application. The schema for users is found in `backend/models/user.js`.
Users have the following attributes: email, username, avatar, followers, and following. The followers attribute is a list of usernames that the
user is followed by, as well as their corresponding user IDs created by MongoDB. The following attribute is a list of usernames that the user is following,
as well as their corresponding user IDs created by MongoDB.

There is a community post schema found in `backend/models/community_post.js`. This schema represents the posts that users are able to make.
The attributes of this scheme are: title, description, image, data, upvotes, downvotes, and vote_count. The upvotes and downvotes attributes are arrays
of users who upvoted/downvoted.

## Express Backend

There are multiple endpoints that can be used to get or post information.

### GET
The following endpoints are used to get data.

`localhost:5000/community/trending-feed`  
This endpoint will get all posts, sorted by non-increasing like count

`localhost:5000/community/personal-feed`  
This endpoint will get community posts, sorted in reverse chronological order

`localhost:5000/community/:id`  
This endpoint will get the Community post associated with the id

`localhost:5000/community/:id/comments`  
This endpoint will get all of the parent comments (not any replies) under the Community post associated with the id

`localhost:5000/community/:pid/comments/:cid`  
This endpoint will get all of the replies to the parent comment with id=cid. This parent comment is under the Community post associated with the pid

`localhost:5000/newsfeed/:pageNo`  
This endpoint will get 20 news articles about crypto, from page `pageno` of the total results. The latest articles are fetched. 
NOTE: `:pageno` is a variable in the endpoint and should be replaced by a number. `:pageno` is useful for implementing paginations.

### POST
`localhost:5000/community`  
This endpoint is used for creating a new social media post. The endpoint takes the provided title, description, and image and creates a new
social media post entry in the database.

`localhost:5000/community/:id/comments`  
This endpoint is used for creating a new comment underneath the social media post with the given id. The endpoint requires the comment description, and will create a new comment in the database, as well as update the social media post.

`localhost:5000/community/:id/comments/:cid/`
This endpoint is used for creating a reply to the parent comment with id=cid, under the social media post with id=pid. The endpoint requires the reply description, and will create a new comment in the database,, as well as update the social media post.

### DELETE
`localhost:5000/community/:id`
This endpoint is used to delete the social media post with the given id.

## React Frontend
The custom useFetch hook in `frontend/hooks` can be used to get data from the express backend to the frontend, using the endpoints above.
The useFetch hook has an `endpoint` parameter, which represents the endpoint the request is being made to. useFetch returns three values: `data`, `isLoading`,
and `error`. `data` is the response from the endpoint, in JSON. `isLoading` is a boolean that can be used to render loading states. `error` is used to display
any errors that occur.  
Example Usage:  

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
  
  The endpoint here is `http://localhost:5000/community/personal-feed`. The data is fetched then any errors are rendered, If there are no errors, then a loading
  state is rendered if the request is not complete yet. Once the request is complete and the data is fetched it is sent as a prop to another component to be displayed.
  In this example, we are fetching commmunity posts to be displayed in a feed

