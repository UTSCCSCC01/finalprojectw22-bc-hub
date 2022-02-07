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
          <Col>Beginner</Col> 

          <Col className='col'>
              <a href='https://www.youtube.com/watch?v=6Gu2QMTAkEU' target={'blank'}>
              <img src={r1c1} alt='' width="200px" height={"150px"} />   
              </a>
              <p>  What is Crypto Currency ?</p>
          </Col> 
          
          
          <Col>
          <a href='/www.google.com'>
            <img src={r1c2} alt='' width="200px" height={"150px"} />
          </a>
          <p>  What is Crypto Currency ?</p>
          </Col> 
          
          <Col>
          <a href='/www.google.com'>
            <img src={r1c3} alt='' width="200px" height={"150px"} />
          </a>
          <p>  What is Crypto Currency ?</p>
          </Col>
        </Row>

        <Row>
          <Col>Intermediate</Col> 
          
          <Col><a href='/www.google.com'>
            <img src={r2c1} alt='' width="200px" height={"150px"} />
          </a>
          <p>  What is Crypto Currency ?</p>
          </Col> 
          
          <Col><a href='/www.google.com'>
            <img src={r2c2} alt='' width="200px" height={"150px"} />
          </a>
          <p>  What is Crypto Currency ?</p>
          </Col> 
          
          <Col><a href='/www.google.com'>
            <img src={r2c3} alt='' width="200px" height={"150px"} />
          </a>
          <p>  What is Crypto Currency ?</p>
          </Col>
        </Row>

        <Row>
          <Col>Advanced</Col> <Col><a href='/www.google.com'>
            <img src={r3c1} alt='' width="200px" height={"150px"} />
          </a>
          <p>  What is Crypto Currency ?</p>
          </Col> 
          
          <Col><a href='/www.google.com'>
            <img src={r3c2} alt='' width="200px" height={"150px"} />
          </a>
          <p>  What is Crypto Currency ?</p>
          </Col> 
          
          <Col><a href='/www.google.com'>
            <img src={r3c3} alt='' width="200px" height={"150px"} />
          </a>
          <p>  What is Crypto Currency ?</p>
          </Col>
        </Row>



      </Container>
    </div>
  )
}

export default EducationPage
