import React from 'react'
import { Form, Button } from 'react-bootstrap'
export default function ProfileLink() {
  return (
    <div className='m-3' style={{width:500, height:200, borderStyle: 'solid'}}>
        <Form className='m-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="email" placeholder="Enter Prifile Image Link here" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}
