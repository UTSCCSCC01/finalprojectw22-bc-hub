import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function News({title, preview, publisher, date, img}) {
  return (
    <Container>
      <Row className='justify-content-center mb-2'>
          <Col className='border-bottom' xs={6}>
              <h4 className=''>{title}</h4>
              <p className='mb-1'>{preview}</p>
              <p className='fw-bold'>{publisher}&nbsp;&nbsp;&nbsp;&nbsp;{date}</p>     
          </Col>
          <Col xs={2} className='border-bottom d-flex align-items-center justify-content-center p-2'>
            <Image className="h-100" rounded='true' src={img}>
            </Image>
          </Col>
      </Row>
    </Container>
  );
}

export default News;
