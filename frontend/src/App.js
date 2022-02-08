import './App.css';
import React from "react";
import {Switch, Route, Link} from "react-router-dom";
// Switch might need to be changed to Routes above

import CreatePerson from './components/CreatePerson';
import ShowPeople from './components/ShowPeople';
import PersonalFeed from './components/Community';

function App() {

  return (
    <div className="App">
      <h1>BC HUB</h1>
      {/* <h2>Form below to show connectivity of frontend, backend, and database</h2>
      <CreatePerson></CreatePerson>
      <h3>Names in DB listed below</h3>
      <ShowPeople></ShowPeople> */}
      <PersonalFeed></PersonalFeed>
    </div>
    
  );
}

export default App;
