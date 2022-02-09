import React from 'react';
import News from "./News"
import Pagination from 'react-bootstrap/Pagination'
var he = require('he');


function Newsfeed(props) {

  let isLoading = true

  const formatDate = (d) => {
    const options = {year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(d);
    const dateTimeFormat = new Intl.DateTimeFormat('en-CA', options);

    return dateTimeFormat.format(date)
  }

  const generatePreview = (content) => {
    return content.slice(0, content.indexOf(" ", 120)) + "...";
  }

  const getNewPage = (pageno) => {
    console.log(`page ${pageno}`);
    props.callback(pageno)
    window.scrollTo(0, 0)
  }

  const displayNews = (props) => {
    const news = props.news;

    if(news.length > 0){
      // setIsLoading(false);
      isLoading = false
      return(
        news.map((article) => {
          return(
            <News
            title={article.title}
            preview={generatePreview(article.content)}
            publisher={article.source.name}
            date={formatDate(article.publishedAt)}
            img={article.urlToImage}
            link={article.url}
            />
          )
        })
      )
    } else {
        isLoading = true
        return (<h3>Loading...</h3>)
    }
  }

  return (
    <>
      <div className='text-center w-100 bg-dark text-light mb-2'>NavBar here</div>
      {displayNews(props)}
      {!isLoading && 
      <Pagination className='align-items-center justify-content-center'>
        <Pagination.Item key={11} onClick={() => getNewPage(1)}>{1}</Pagination.Item>
        <Pagination.Item key={12} onClick={() => getNewPage(2)}>{2}</Pagination.Item>
        <Pagination.Item key={13} onClick={() => getNewPage(3)}>{3}</Pagination.Item>
        <Pagination.Item key={14} onClick={() => getNewPage(4)}>{4}</Pagination.Item>
        <Pagination.Item key={15} onClick={() => getNewPage(5)}>{5}</Pagination.Item>
      </Pagination>
      }
    </>
  );
}

export default Newsfeed;

