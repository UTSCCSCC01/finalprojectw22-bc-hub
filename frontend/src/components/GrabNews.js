import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';
import Newsfeed from './Newsfeed';

function GrabNews() {

const [news, getNews] = useState('');

  const url = 'http://localhost:5000/';

  useEffect(() => {
    getAllNews();
  }, []);

  const getAllNews = () => {
    axios.get(`${url}newsfeed`)
    .then((response) => {
      const allNews = response.data;
      getNews(allNews);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return (
      <Newsfeed news={news}/>
  )
}

export default GrabNews;
