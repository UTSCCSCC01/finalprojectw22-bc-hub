# Documentation

Installation instructions can be found in the README.

## Database

The database (MongoDB) has multiple schemas: the User schema, the community_post schema, and the communityComment schema. 
The user schema represents a user of the application. The schema for users is found in `backend/models/user.js`.Users have the following attributes: username, password, email, name, profilePicture, followers, followingUsers, followingCryptos, followingNFTs, posts, and comments. Followers is a list of other users that are following the user. FollowingUsers is a list of other users that the user is following. FollowingCryptos is a list of strings representing different crypto currencies that the user is following. FollowingNFTs is a list of strings representing NFT series that the user is following. Posts are a list of posts that the user has made. Comments are a list of comments that the user has made.

The community_post schema represents a post that a user can make. The schema for a community post is found in `backend/models/community_post.js`. The attributes of this scheme are: title, description, image, date, dateString, likes, dislikes, totalLikes, totalDislikes, and comments. dateString is a String representing the date the post was made, while date is a datetime object representing the same. Likes and dislikes are a list of users who have liked or disliked the post respectively. totalLikes and totalDislikes are numbers indicating how many people have liked or disliked a post respectively. Comments is a list of comments that have been made about the post.

The communityComment schema represents a comment that a user can make. The schema for a community comment is found in `backend/models/communityComment.js`. The attributes of this scheme are: description, date, dateString, likes, dislikes, totalLikes, totalDislikes, and comments. dateString is a String representing the date the comment was made, while date is a datetime object representing the same. Likes and dislikes are a list of users who have liked or disliked the comment respectively. totalLikes and totalDislikes are numbers indicating how many people have liked or disliked a comment respectively. Comments is a list of other comments that have been made about the comment.

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

`localhost:5000/market/main`
This endpoint will get current cryptocurrency market data for all supported cryptocurrencies. 

`localhost:5000/market/main/:symbol
This endpoint will get the current market data of cryptocurrency `symbol`, where `symbol` is the abbreviation of a cryptocurrency (e.g. BTC).

`localhost:5000/users/:id`  
This endpoint will get the user info of the user with the given id

### POST
`localhost:5000/community`  
This endpoint is used for creating a new social media post. The endpoint takes the provided title, description, and image and creates a new
social media post entry in the database.

`localhost:5000/community/:id/comments`  
This endpoint is used for creating a new comment underneath the social media post with the given id. The endpoint requires the comment description, and will create a new comment in the database, as well as update the social media post.

`localhost:5000/community/:id/comments/:cid/`
This endpoint is used for creating a reply to the parent comment with id=cid, under the social media post with id=pid. The endpoint requires the reply description, and will create a new comment in the database,, as well as update the social media post.

`localhost:5000/community/:id/like-dislike/`
This endpoint will register a like or dislike to the social media post with the given id

`localhost:5000/community/:pid/comments/:cid/like-dislike/`
This endpoint will register a like or dislike to the comment with id equal to cid. This comment belongs to the social media post with id equal to pid

### DELETE
`localhost:5000/community/:id`
This endpoint is used to delete the social media post with the given id.

## React Frontend
### Hooks
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
  In this example, we are fetching community posts to be displayed in a feed
  
### Major Components
#### Community
  This component is the main component for the social media feeds. Given the type of feed (personal or trending), it gets the social media posts (using the useFetch hook) and passes them onto the Feed component, which will display each post in a FeedCard component. 

#### CommunityDetailedView
  This component is the main component for the detailed views of the social media posts. It makes a GET request for the social media post (using the useFetch hook) and passes it to the DetailedViewCard component.The DetailedViewCard component renders detailed view of the post, as well as CommunityComment components to make up the comment section of the post. The CommunityComment uses the ReplyCommentModal to render a reply comment form.


#### Sidebar
  This component is useful in UserProfile, it will auto scroll to specific section such as Posts, Followed Currencies or market. Which will use Fetch from the backend data and display onto userProfile page. The profile page will use end point ‘`localhost:5000/users/:id`  ’to Fetch data and display user info.

#### Navbar
  This component allows user(log-in and non-login) to Navigate between Pages for Market, News, Education, Community and ProfilePage. Each connect to the react routing to the page for a convenient use. 

#### SearchBar
This component is used on both the Market and Community page. On the Market page, it allows users to filter through the cryptocurrency data to find data on a specific currency, as well as allow them to quickly navigate to a cryptocurrencies page via the search button. On the Community page, it allows users to filter through social media posts by their content (title and body). 

#### GrabNews
This component is used for communicating with the backend to get news articles. It makes a GET request to the endpoint `localhost:5000/newsfeed/:pageNo` and supplies
the response to the Newsfeed component as a prop. `pageNo` is set to 1 by default but subsequent page numbers are provided to GrabNews by the Newsfeed component as a prop using a callback that is given to Newsfeed by GrabNews as a prop.

#### Newsfeed
This component is returned by the GrabNews component. It displays the articles that were fetched by GrabNews by taking each article and rendering a News component which takes in the different information
from each article and formats it. Pagination of the articles is implemented in this component. A callback sent from GrabNews as a prop is used for communicating which page of articles should be rendered.
This component also implements the filtering of articles for the search bar in the newsfeed.

#### News
This component is used by Newsfeed to format articles it received from GrabNews. Newsfeed is composed of many News components. The News component has props for the title, preview, publisher, data, image link, and link to article.
These props are given to the News component by Newsfeed.

#### NewsSearchBar
This component renders the search bar for users to search for specific articles. This component supports filtering as the user types by sending the text in the search bar
to the Newsfeed component via a callback supplied to NewsSearchBar by Newsfeed as a prop. Newsfeed then takes this information as it is typed by the user and filters the articles and displays
the filtered articles as the user types.
