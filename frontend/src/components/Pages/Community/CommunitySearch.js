
function filterFunction(filterData){
    const input = document.getElementById('my-input').value.toUpperCase();
    const noResult = document.getElementById('no-results');
    let cnt = 0;
    
    for (var i = 0; i  < filterData.length; i++){
        console.log('hello');
        const title = filterData[i].title.toUpperCase();
        const body = filterData[i].description.toUpperCase();
        const post = document.getElementById(filterData[i]._id);
        
        if (title.indexOf(input) > -1 || body.indexOf(input) > -1){
            post.style.display = "";
        } else {
            post.style.display = "none";
            cnt += 1;
        }
    }

    if (cnt == filterData.length){
        noResult.innerText = 'No results';
    } else {
        noResult.innerText = "";
    }
}

export default filterFunction;
