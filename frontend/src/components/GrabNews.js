import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';
import Newsfeed from './Newsfeed';
import { Container } from 'react-bootstrap';

function GrabNews() {

const [news, getNews] = useState('');
const [page, setPage] = useState(1);

const changePage = (p) => {
  setPage(p);
}

  const url = `http://localhost:5000/newsfeed/${page}`;

  useEffect(() => {
    getAllNews();
  }, [page]);

  const getAllNews = () => {
    axios.get(url)
    .then((response) => {
      const allNews = response.data;
      getNews(allNews);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div style={{minHeight:1920}}>
      <Newsfeed
      news={news}
      callback={changePage}
      />

    </div>
      
  )
}

export default GrabNews;
