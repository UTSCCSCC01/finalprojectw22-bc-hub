On Monday, January 31st, 2022, we had our release planning meeting for sprint 1 on the CSC301 Discord. The meeting was attended by all seven group members (Sahil, Faraz, Kesavar, Nathan, Ryan, Hongting and Keith), with everyone actively participating in the discussion. 

Our goal for this release is to lay the groundwork for the following, four main components of our application:

* Social Media
* Market
* News
* Education

For Social Media, our goal is to implement the basic components and layout of a social media post, as well as display these posts in two types of feeds. These goals relate to the user story BH-3. We want to be able to click on posts to view more information (comment sections and full descriptions). We also want to implement a functioning personal feed and trending section. Since user authentication will be implemented in a later sprint, the personal feed will contain posts from the entire user base (instead of who the user follows) in a reverse-chronological order. The Trending feed will contain posts from the past 24 hours, sorted by non-increasing like count.

With the Market section, our goal is to learn how to retrieve market information through existing cryptocurrency APIs and display the market information in a clear and intuitive user interface. These goals relate to the user story BH-12. We would like to display prices, charts and other statistics for various currencies on one page, and allow users to see more info about the currency by clicking on the currency's name.

For the News section, our goal is to display crypto-currency news from various credible sources in one newsfeed. For each news card, we are going to display the title, an image if possible, publication date and publication. News cards will direct users to the full article on that publication’s site. This goal correlates with user story BH-7.

For the Education section, the goal is to research crypto-currency concepts and definitions from credible sources, and then display the information in one, simple-to-navigate section to educate new users on the crypto-currency space. This goal relates to the user story BH-1. This section is intended for new-comers to cryptocurrency, not experts, so the content in this section will cover basic concepts in the field.

We also want to implement a Navbar, which will allow users to quickly transition between the four sections mentioned above.

The user stories that we are going to implement in this sprint are the following:
* BH-3
* BH-12
* BH-7
* BH-1
* BH-33

The team capacity for this sprint is 26 points

There are no spikes in this sprint. With these chosen user stories, the team has enough info about the feature’s that we are going to implement, hence why no spikes are being introduced yet.

The following is the breakdown for each task in sprint 1:
* BH-3
  -Ryan - Set up Social Media post schema
  -Sahil - Add sample social media posts
  -Sahil - Set up routing for personal feed, trending feed and a dedicated page for each post
  -Kesavar - Set up the front end for the feeds and for the page dedicated to a single social media post.
* BH-12
  -Nathan - Set up routes for the main market page and individual currencies	
  -Nathan - Use an API to fetch market information
  -Nathan - Display market info on the front end for both the main market page, as well as for each individual currency
* BH-7
  -Keith - Use an API to fetch cryptocurrency news
  -Keith - Set up news route
  -Faraz - Display news articles on the front end
* BH-1
  -Hongting - Create front end for the educational section
  -Hongting - Collect educational content from various reputable sources
  -Hongting - Upload educational content to database
* BH-33
  -Hongting - Navbar should be at the top of the page, with links to the 4 sections clearly visible.
  -Hongting - Set up routing so that a user can quickly switch between sections
