import React from 'react'
import { Card, Button, Form, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import sendHttpRequest from './HttpHandler';




function sendData(info) {
    sendHttpRequest('POST', 'http://localhost:5000/community', info).then(responseData => {console.log(responseData)})
}

function getText(id) {
    var txt = document.getElementById(id).value;
    return txt;
}



function Post() {
    var tit;
    var img;
    var desc;
    
    tit = getText('title');
    img = getText('image');
    desc = getText('description')
    var po = {
        "title" : tit,
        "description" : desc,
        "image" : img
    }
    if (tit.length === 0 || desc.length === 0) {
        alert('Cannot have empty title or description');
    } else {
        sendData(po);
        window.location.reload();
    }

}



export default function MakePost( {closeModal} ) {
  return (
    <div style={{position: 'fixed', bottom: 0, right: 30, zIndex:100, }}> 

        <Card className="mt-4 shadow border-0 rounded-3 text-center" style={{
        width: 500, height: 570, backgroundColor: 'rgb(201, 76, 76)'}}>
            <Card.Body>
                <Card.Title>Create post</Card.Title>
                
                    <Form>
                        <Form.Group>
                            <Form.Control id = 'title'  placeholder='Enter your Title here...' style={{margin: 10, backgroundColor: '#f5d5d5', width: 450}}></Form.Control>
                            <Form.Control id = 'image' placeholder='Enter your Image Link' style={{margin: 10, width: 400, backgroundColor: '#f5d5d5'}}></Form.Control>
                            
                            <hr/>
                            <textarea id = 'description' style={{margin: 10, resize: 'none', width: 450, height: 300, backgroundColor: '#f5d5d5', fontSize: "2em", borderRadius: 10}} placeholder='What are you thinking?'/>
                        </Form.Group>
                    </Form>
                    <hr/>
                    <ButtonToolbar className='mb-3' style={{marginTop: 10}}>
                        <Button className='mx-2' variant='outline-light' onClick={() => closeModal(false)}>Cancel</Button>{' '}
                        <Button style={{marginLeft: "313px"}} variant='dark' onClick={Post}>Post</Button>{' '}
                    </ButtonToolbar>
                
            </Card.Body>
        </Card>
    </div>
  )
}