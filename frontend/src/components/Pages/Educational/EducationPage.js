import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import './EducationPage.css';
import NavBar from '../../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserSendHttpRequest from '../User/UserHttpHandler';
// import image
import r1c1 from './BitCoinPic/r1col1.jpg';
import r1c2 from './BitCoinPic/r1col2.jpg';
import r1c3 from './BitCoinPic/r1col3.jpg';
import r2c1 from './BitCoinPic/r2col1.jpg';
import r2c2 from './BitCoinPic/r2col2.jpg';
import r2c3 from './BitCoinPic/r2col3.jpg';
import r3c1 from './BitCoinPic/r3col1.jpg';
import r3c2 from './BitCoinPic/r3col2.jpg';
import r3c3 from './BitCoinPic/r3col3.jpg';

// NOTE: react-component: "p-padding", "m-margin"

function sendProData(info) {
  UserSendHttpRequest('POST', 'http://localhost:5000/updateEducationProgress', info).then(responseData => {console.log(responseData)})
}

function sendProgEdu(index) {

  var po_progress = {
      "index" : index,
      "newProgress" : true
  }

  sendProData(po_progress);
  }

function EducationPage() {
  return (
    <div className="learn text-white"> 
      <NavBar/>
      <Container className='ctr ' align={"center"} > 
        <Row >
          <Col><h1>Beginner</h1></Col> 

          <Col className='col' >
            
              <a href='https://www.youtube.com/watch?v=6Gu2QMTAkEU' target={'blank'} onClick={() => {sendProgEdu(0)}}
              className='btn d-flex align-items-center justify-content-center hovE' style={{borderRadius: 20, width:210}}> 
                <img src={r1c1} alt='' width="200px" height={"150px"} className='learnimg' /> 
              </a>
              <br/>
              <h5 className='labelText'>What is Crypto Currency</h5>
          </Col> 
          
          
          <Col>
          <a href='https://www.fool.com/the-ascent/cryptocurrency/best-cryptocurrency-apps/' target={'blank'} onClick={() => {sendProgEdu(1)}}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r1c2} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          <h5 className='labelText'>Beginner Crypto-App</h5>
          </Col> 
          
          <Col>
          <a href='https://coinmarketcap.com/trending-cryptocurrencies/' target={'blank'} onClick={() => {sendProgEdu(2)}}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r1c3} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
        
          <br/>
          <h5 className='labelText'>How to Find Crypto Trend</h5>
          </Col>
        </Row>

        <Row>
          <Col><h1>Intermediate</h1></Col> 
          
          <Col><a href='https://www.investopedia.com/tech/most-important-cryptocurrencies-other-than-bitcoin/' target={'blank'} onClick={() => {sendProgEdu(3)}}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}} >
            <img src={r2c1} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          <h5 className='labelText'>Investment Choice</h5>
          </Col> 
          
          <Col><a href='https://thedailyguardian.com/impact-of-cryptocurrencies-on-the-economy/' target={'blank'} onClick={() => {sendProgEdu(4)}}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r2c2} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          
          <h5 className='labelText'>Global Economical Effect</h5>
          </Col> 
          
          <Col><a href='https://www.sofi.com/learn/content/understanding-the-different-types-of-cryptocurrency/' target={'blank'} onClick={() => {sendProgEdu(5)}}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r2c3} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
      
          <h5 className='labelText'>Types of Digital Currencies</h5>
          </Col>
        </Row>

        <Row>
          <Col><h1>Advanced</h1></Col> 
          
          <Col><a href='https://www.youtube.com/watch?v=422HORNUfkU' target={'blank'} onClick={() => {sendProgEdu(6)}}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r3c1} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
      
          <h5 className='labelText'>Crypto v. Token</h5>
          </Col> 
          
          <Col><a href='https://www.cmcmarkets.com/en/learn-cryptocurrencies/what-are-the-risks' target={'blank'} onClick={() => {sendProgEdu(7)}}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r3c2} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          <h5 className='labelText'>Risk of Crypto Trade</h5>
          </Col> 
          
          <Col><a href='https://www.youtube.com/watch?v=SSo_EIwHSd4' target={'blank'} onClick={() => {sendProgEdu(8)}}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r3c3} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          <h5 className='labelText'>Blockchain</h5>
          </Col>
        </Row>



      </Container>
    </div>
  )
}

export default EducationPage
