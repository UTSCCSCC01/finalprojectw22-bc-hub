import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image'
import {useEffect, useState } from 'react';

function News({title, preview, publisher, date, img, link}) {
  const [isValidImage, setIsValidImage] = useState(false)

  // .catch(err => {});
  function checkImage(url) {
    var i = new Image();
    i.onload = function() {
      if (this.width > 0) {
        setIsValidImage(true)
      }
    }
    i.onerror = function() {
      console.log("image doesn't exist");
    }
    i.src = url;  
  }
  checkImage(img)

  return (
    <div style={{minHeight:10}} >
      <Container style={{backgroundColor: 'white'}} >
        <Row className='border-bottom p-0 justify-content-center'>
            <Col className='' xs={6}>
              <a target="_blank" rel="noopener noreferrer" className="text-decoration-none text-black" href={link}>
                <h4 className='mt-2'>{title}</h4>
                <p className='mb-1 text-wrap'>{preview}</p>
                <p className='fw-bold mb-2'>{publisher}&nbsp;&nbsp;&nbsp;&nbsp;{date}</p>    
              </a> 
            </Col>
            <Col xs={2} className='d-flex align-items-center justify-content-center p-2'>
              <a target="_blank" rel="noopener noreferrer" href={link}>
              { isValidImage &&
                <img className="h-100 w-100 shadow" rounded='true' src={img} alt='Not Found' ></img>
              }
              </a>
            </Col>
            
        </Row>
      </Container>
    </div>
  );
}

export default News;