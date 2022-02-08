import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function News({title, preview, publisher, date, img, link}) {
  return (
    <Container>
      <Row className='justify-content-center mb-2'>
          <Col className='border-bottom' xs={6}>
            <a target="_blank" rel="noopener noreferrer" className="text-decoration-none text-black" href={link}>
              <h4 className=''>{title}</h4>
              <p className='mb-1'>{preview}</p>
              <p className='fw-bold'>{publisher}&nbsp;&nbsp;&nbsp;&nbsp;{date}</p>    
            </a> 
          </Col>
          <Col xs={2} className='border-bottom d-flex align-items-center justify-content-center p-2'>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <Image className="h-100 w-100" rounded='true' src={img}></Image>
            </a>
          </Col>
      </Row>
    </Container>
    
  );
}

export default News;
