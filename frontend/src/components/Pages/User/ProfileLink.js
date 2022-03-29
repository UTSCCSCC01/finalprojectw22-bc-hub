import React from 'react'
import { Form, Button } from 'react-bootstrap'
export default function ProfileLink(closeModal) {
  return (
    <div className='m-3 rounded-3 shadow-lg' style={{width:500, height:200, position: 'fixed', top: '20%', right: '30%', zIndex: 12, backgroundColor: 'pink' }}>
        <Form className='m-3'>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h5>Profile Image</h5>
                <hr/>
                <Form.Control type="email" placeholder="Enter Prifile Image Link here" />
            </Form.Group>
            

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Button variant="light" type="submit" style={{marginLeft: 305}} onClick={() => {closeModal(false)}}>
                Cancel
            </Button>
        </Form>
    </div>
  )
}
