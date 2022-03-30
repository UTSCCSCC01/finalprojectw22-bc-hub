import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import UserSendHttpRequest from './UserHttpHandler'
import { imageExists } from '../../Utils/ExistImage'
export default function ProfileLink({closeModal}) {

  function sendPicData(link) {
    var info = {
      "newPic" : link
    }
    UserSendHttpRequest('POST', 'http://localhost:5000/updateProfilePic', info).then(responseData => {console.log(responseData)})
    // if (imageExists(link)) {
    //   UserSendHttpRequest('POST', 'http://localhost:5000/updateProfilePic', info).then(responseData => {console.log(responseData)})
    // } else {
    //   alert('Image Invalid');
    // }
    
  }

  function getText(id) {
    var txt = document.getElementById(id).value;
    return txt;
  }


  return (
    
    <div className='m-3 rounded-3 shadow-lg' style={{width:500, height:200, position: 'fixed', top: '20%', right: '30%', zIndex: 12, backgroundColor: 'pink' }}>
      {/* {console.log('exist??' + imageExists('https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-qiqi/sticker_10.png?d32bc63238d717561bba67d8a5aabca9&d=200x200'))} */}
        <Form className='m-3'>
          
            <Form.Group className="mb-3" controlId="imageLink">
                <h5>Profile Image</h5>
                <hr/>
                <Form.Control placeholder="Enter New Profile Image Link here" />
            </Form.Group>
            

            <Button variant="primary" type='submit' onClick={() => {sendPicData(getText('imageLink'))}}>
                Submit
            </Button>

            <Button variant="light"  style={{marginLeft: 305}} onClick={() => {closeModal(false)}}>
                Cancel
            </Button>
        </Form>
    </div>
  )
}
