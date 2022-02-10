import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GrabNews from './components/GrabNews';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="/newsfeed" element={<GrabNews/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

