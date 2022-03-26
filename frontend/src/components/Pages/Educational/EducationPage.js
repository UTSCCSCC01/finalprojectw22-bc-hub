import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap';
import './EducationPage.css';
import NavBar from '../../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
// import image
import wallpaper from './cryp_wallpaper.jpg'
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
function EducationPage() {
  return (
    <div class="learn text-white" style={{backgroundImage: 'https://www.gensh.in/wallpaper/genshin/genshin_30_4K.jpeg'}}> 
      <NavBar/>
      <Container className='ctr ' align={"center"} > 
        <Row >
          <Col><h1>Beginner</h1></Col> 

          <Col className='col' >
              <a href='https://www.youtube.com/watch?v=6Gu2QMTAkEU' target={'blank'} 
              className='btn d-flex d-flex align-items-center justify-content-center hovE' style={{borderRadius: 20, width:210}}>
              <img src={r1c1} alt='' width="200px" height={"150px"} className='learnimg' />   
              </a>
              <br/>
              <h5 className='labelText'>What is Ctypto Currency</h5>
          </Col> 
          
          
          <Col>
          <a href='https://www.fool.com/the-ascent/cryptocurrency/best-cryptocurrency-apps/' target={'blank'} className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r1c2} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          <h5 className='labelText'>Beginner Crypto-App</h5>
          </Col> 
          
          <Col>
          <a href='https://coinmarketcap.com/trending-cryptocurrencies/' target={'blank'} className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r1c3} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
        
          <br/>
          <h5 className='labelText'>How to Find Crypto Trend</h5>
          </Col>
        </Row>

        <Row>
          <Col><h1>Intermediate</h1></Col> 
          
          <Col><a href='https://www.investopedia.com/tech/most-important-cryptocurrencies-other-than-bitcoin/' target={'blank'}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}} >
            <img src={r2c1} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          <h5 className='labelText'>Investment Choice</h5>
          </Col> 
          
          <Col><a href='https://thedailyguardian.com/impact-of-cryptocurrencies-on-the-economy/' target={'blank'} 
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r2c2} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          
          <h5 className='labelText'>Global Economical Effect</h5>
          </Col> 
          
          <Col><a href='https://www.sofi.com/learn/content/understanding-the-different-types-of-cryptocurrency/' target={'blank'}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r2c3} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
      
          <h5 className='labelText'>Types of Digital Currencies</h5>
          </Col>
        </Row>

        <Row>
          <Col><h1>Advanced</h1></Col> 
          
          <Col><a href='https://www.youtube.com/watch?v=422HORNUfkU' target={'blank'}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r3c1} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
      
          <h5 className='labelText'>Crypto v. Token</h5>
          </Col> 
          
          <Col><a href='https://www.cmcmarkets.com/en/learn-cryptocurrencies/what-are-the-risks' target={'blank'}
          className='btn d-flex hovE d-flex align-items-center justify-content-center' style={{borderRadius: 20, width:210}}>
            <img src={r3c2} alt='' width="200px" height={"150px"} className='learnimg'/>
          </a>
          <br/>
          <h5 className='labelText'>Risk of Crypto Trade</h5>
          </Col> 
          
          <Col><a href='https://www.youtube.com/watch?v=SSo_EIwHSd4' target={'blank'}
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
