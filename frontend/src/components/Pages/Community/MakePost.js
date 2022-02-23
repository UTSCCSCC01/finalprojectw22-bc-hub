import React from 'react'
import { Card, Button, Form, ButtonToolbar} from 'react-bootstrap';
import NavBar from '../../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MakePost() {
  return (
    <div>
        <NavBar/>
        <Card className='mb-3, text-center' style={{
        width: 500, height: 500, backgroundColor: 'rgb(201, 76, 76)'}}>
            <Card.Body>
                <Card.Title>Create post</Card.Title>
                <hr/>
                <Card.Text> TESTING</Card.Text>
                    <Form>
                        <Form.Group>
                            <textarea style={{width: 450, height: 300}}/>
                        </Form.Group>
                    </Form>
                <hr/>
                    <ButtonToolbar>
                        <Button className='mx-3' variant='outline-light'>Cancel</Button>{' '}
                        <Button style={{marginLeft: "290px"}} variant='dark' >Post</Button>{' '}
                    </ButtonToolbar>
                
            </Card.Body>
        </Card>
    </div>
  )
}
