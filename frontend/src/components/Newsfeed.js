import React from 'react';
import News from "./News"
import Pagination from 'react-bootstrap/Pagination'
import NavBar from './NavBar/NavBar';
import NewsSearchBar from './Pages/News/NewsSearchBar';
import { useState, useEffect } from 'react';
import './Pages/News/News.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Newsfeed(props) {
  const [inputText, setInputText] = useState("");
  const [filteredResults, setFilteredResults] = useState(props.news);

  useEffect(() => {
    if(inputText !== ""){
      const filteredData = props.news.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(inputText.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(props.news)
    }
    displayNews();
    console.log("useffect: " + inputText);
  }, [inputText, props.news]);

  
  
  const changeText = (t) => {
    setInputText(t)
  }

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

  const displayNews = () => {
    const news = filteredResults;
    console.log(news.length)
    
      if(news.length > 0){
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
      } else if(news.length <= 0 && inputText.length > 0) {
          isLoading = false
          return (<h3>No Results</h3>)
      } else if(news.length <= 0 ) {
        isLoading = true
        return (<h3>Loading...</h3>)
    }
    
  }

  return (
    <>

      <div className="main-news-page" style={{minHeight:1920}}>
      <div className="mb-2"><NavBar></NavBar></div>
      <Container className='d-flex align-items-center justify-content-center p-3'>
      <NewsSearchBar
      callback={changeText}
      />
      
      <Link to='/' style={{marginLeft: 900}}>
        <button className='button-49' >News</button>
      </Link>
      </Container>
      
      {displayNews()}

      {!isLoading && 
      <Pagination className='mt-2 align-items-center justify-content-center p-5'>
        <Pagination.Item key={11} onClick={() => getNewPage(1)}>{1}</Pagination.Item>
        <Pagination.Item key={12} onClick={() => getNewPage(2)}>{2}</Pagination.Item>
        <Pagination.Item key={13} onClick={() => getNewPage(3)}>{3}</Pagination.Item>
        <Pagination.Item key={14} onClick={() => getNewPage(4)}>{4}</Pagination.Item>
        <Pagination.Item key={15} onClick={() => getNewPage(5)}>{5}</Pagination.Item>
      </Pagination>
      }
      </div>
    </>
  );
}

export default Newsfeed;