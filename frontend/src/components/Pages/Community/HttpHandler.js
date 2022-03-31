function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('x-access-token', localStorage.getItem('token'))
        xhr.onload = () => {

    }
    xhr.send(JSON.stringify(data));

    });
    return promise;
}

function getData() {
    sendHttpRequest('GET', 'https://random.dog/doggos').then(responseData => {console.log(responseData)});
}



export default sendHttpRequest