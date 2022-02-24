import React from 'react'
import { Card, Button, Form, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MakePost( {closeModal} ) {
  return (
    <div style={{position: 'fixed', bottom: 0, right: 30, zIndex:100, }}> 

        <Card className="mt-4 shadow border-0 rounded-3 text-center" style={{
        width: 500, height: 550, backgroundColor: 'rgb(201, 76, 76)'}}>
            <Card.Body>
                <Card.Title>Create post</Card.Title>
                
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder='Enter your Title here...'>

                            </Form.Control>
                            <hr/>
                            <textarea style={{width: 450, height: 300, backgroundColor: '#99FFFF', fontSize: "2em"}} placeholder='What are you thinking?'/>
                        </Form.Group>
                    </Form>
                    <hr/>
                    <ButtonToolbar className='mb-3'>
                        <Button className='mx-2' variant='outline-light' onClick={() => closeModal(false)}>Cancel</Button>{' '}
                        <Button style={{marginLeft: "313px"}} variant='dark'>Post</Button>{' '}
                    </ButtonToolbar>
                
            </Card.Body>
        </Card>
    </div>
  )
}
