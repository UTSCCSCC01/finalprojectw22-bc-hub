import React from 'react'

function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
        console.log(xhr.response);

    }
    console.log('data???');
    console.log(JSON.stringify(data));
    xhr.send(JSON.stringify(data));


    });
    return promise;

    
}

function getData() {
    sendHttpRequest('GET', 'https://random.dog/doggos').then(responseData => {console.log(responseData)});
}

var po = {
    "title" : "TEST Aiden",
    "description" : "I love genshin impact",
    "image" : "https://preview.redd.it/ruiy86h0gww61.jpg?auto=webp&s=60f0c150670426f9c35562b6ea3fc06b36cddecf"
}
function sendData() {
    sendHttpRequest('POST', 'http://localhost:5000/community', po).then(responseData => {console.log(responseData)})
}

function HttpTest() {
    
    

  return (
    <div>
        HttpTest'''
        <button onClick={sendData} style={{width : 20, height: 20}}></button>
    </div>

  )
}

export default HttpTest