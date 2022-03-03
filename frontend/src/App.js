import './App.css';
import React from "react";
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
// Switch might need to be changed to Routes above

import CreatePerson from './components/CreatePerson';
import ShowPeople from './components/ShowPeople';
import { ChakraProvider } from '@chakra-ui/react'
function App() {

  return (
    <div className="App">
      <NavBar/>
      <ChakraProvider>
        <LandingPage/>
      </ChakraProvider>
      
      {/* <h1>BC HUB</h1>
      <h2>Form below to show connectivity of frontend, backend, and database</h2>
      <CreatePerson></CreatePerson>
      <h3>Names in DB listed below</h3>
      <ShowPeople></ShowPeople> */}
    </div>
    
  );
}

export default App;
