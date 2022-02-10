import React from 'react';
import {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import files

import EducationPage from './components/Pages/Educational/EducationPage';
import GrabNews from './components/GrabNews';
import Market from './components/Pages/Market/MarketPage';
import Community from './components/Pages/Community/CommunityPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="education" element={<EducationPage />} />
    <Route path="news" element={<GrabNews />} />
    <Route path="market" element={<Market />} />
    <Route path="community" element={<Community />} />
  </Routes>
</BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
