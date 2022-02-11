import React from 'react';
import { render } from "react-dom";
import App from "./App";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Pages
import EducationPage from './components/Pages/Educational/EducationPage';
import GrabNews from './components/GrabNews';
import Market from './components/Pages/Market/MarketPage';
import Crypto from './components/Pages/Market/CryptoPage';
import Community from './components/Pages/Community/Community';
import NotFoundPage from './components/Pages/NotFoundPage';

// Main 
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/news" element={<GrabNews />} />
      <Route path="/market" element={<Market />} />
      <Route path="/:symbol" element={<Crypto />} />
      <Route path="/community/trending-feed" element={<Community feed="trending-feed" />} />
      <Route path="/community/personal-feed" element={<Community feed="personal-feed" />} />
      <Route path="/community" element={<Community feed="personal-feed" />} />
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>,

  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();