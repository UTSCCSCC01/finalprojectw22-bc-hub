import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react';

function NewsSearchBar(props) {
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        props.callback(inputText)
        console.log("newssearchbar: " + inputText);
    }, [inputText])

    function submitButtonClick(event) {
		event.preventDefault();
}
    
    return (
    <>
        <div style={{width: 500}}>
            <Container className='justify-content-center mb-2 ' >
                <Form onSubmit={submitButtonClick} >
                    <Form.Control onKeyUp={(e) => {setInputText(e.target.value)}} id="my-input" type="text" placeholder="Search" />
                </Form>
            </Container>
            
        </div>
    </>
    )
}

export default NewsSearchBar