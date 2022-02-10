import React from 'react';
import { render } from "react-dom";
import App from "./App";
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import files

import EducationPage from './components/Pages/Educational/EducationPage';
import GrabNews from './components/GrabNews';
import Market from './components/Pages/Market/MarketPage';
import Community from './components/Pages/Community/CommunityPage';

const rootElement = document.getElementById("root");
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

