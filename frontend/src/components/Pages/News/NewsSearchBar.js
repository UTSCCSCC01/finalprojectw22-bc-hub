import React from 'react'
import { Form } from 'react-bootstrap'
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
        <div className='justify-content-center d-flex mb-2 container'>
            <Form onSubmit={submitButtonClick}>
                <Form.Label>Search</Form.Label>
                <Form.Control onKeyUp={(e) => {setInputText(e.target.value)}} id="my-input" type="text" placeholder="Search" />
            </Form>
        </div>
    </>
    )
}

export default NewsSearchBar