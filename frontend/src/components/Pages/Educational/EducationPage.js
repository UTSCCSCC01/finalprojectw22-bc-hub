import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './EducationPage.css';
import NavBar from '../../NavBar/NavBar';
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
    <div class="bg-dark text-white" > 
      <NavBar/>
      <Container className='ctr'> 
        <Row >
          <Col><h1>Beginner</h1></Col> 

          <Col className='col'>
              <a href='https://www.youtube.com/watch?v=6Gu2QMTAkEU' target={'blank'}>
              <img src={r1c1} alt='' width="200px" height={"150px"} />   
              </a>
              <br/>
              <br/>
              <p>  What is Crypto Currency</p>
          </Col> 
          
          
          <Col>
          <a href='https://www.fool.com/the-ascent/cryptocurrency/best-cryptocurrency-apps/' target={'blank'}>
            <img src={r1c2} alt='' width="200px" height={"150px"} />
          </a>
          <br/>
          <br/>
          <p>     Beginner Crypto-App</p>
          </Col> 
          
          <Col>
          <a href='https://coinmarketcap.com/trending-cryptocurrencies/' target={'blank'}>
            <img src={r1c3} alt='' width="200px" height={"150px"} />
          </a>
          <br/>
          <br/>
          <p>  How to Find Crypto Trend</p>
          </Col>
        </Row>

        <Row>
          <Col><h1>Intermediate</h1></Col> 
          
          <Col><a href='https://www.investopedia.com/tech/most-important-cryptocurrencies-other-than-bitcoin/' target={'blank'}>
            <img src={r2c1} alt='' width="200px" height={"150px"} />
          </a>
          <br/>
          <br/>
          <p> Investment Choice</p>
          </Col> 
          
          <Col><a href='https://thedailyguardian.com/impact-of-cryptocurrencies-on-the-economy/' target={'blank'}>
            <img src={r2c2} alt='' width="200px" height={"150px"} />
          </a>
          <br/>
          <br/>
          <p>  Global Economical Effect</p>
          </Col> 
          
          <Col><a href='https://www.sofi.com/learn/content/understanding-the-different-types-of-cryptocurrency/' target={'blank'}>
            <img src={r2c3} alt='' width="200px" height={"150px"} />
          </a>
          <br/>
          <br/>
          <p> Types of Digital Currencies</p>
          </Col>
        </Row>

        <Row>
          <Col><h1>Advanced</h1></Col> 
          
          <Col><a href='https://www.youtube.com/watch?v=422HORNUfkU' target={'blank'}>
            <img src={r3c1} alt='' width="200px" height={"150px"} />
          </a>
          <br/>
          <br/>
          <p>         Crypto v. Token</p>
          </Col> 
          
          <Col><a href='https://www.cmcmarkets.com/en/learn-cryptocurrencies/what-are-the-risks' target={'blank'}>
            <img src={r3c2} alt='' width="200px" height={"150px"} />
          </a>
          <br/>
          <br/>
          <p>      Risk of Crypto Trade</p>
          </Col> 
          
          <Col><a href='https://www.youtube.com/watch?v=SSo_EIwHSd4' target={'blank'}>
            <img src={r3c3} alt='' width="200px" height={"150px"} />
          </a>
          <br/>
          <br/>
          <p>              Blockchain</p>
          </Col>
        </Row>



      </Container>
    </div>
  )
}

export default EducationPage
