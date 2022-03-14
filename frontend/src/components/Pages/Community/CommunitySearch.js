
function filterFunction(filterData){
    const input = document.getElementById('my-input').value.toUpperCase();
    
    for (var i = 0; i  < filterData.length; i++){
        console.log('hello');
        const title = filterData[i].title.toUpperCase();
        const body = filterData[i].description.toUpperCase();
        const post = document.getElementById(filterData[i]._id);
        
        if (title.indexOf(input) > -1 || body.indexOf(input) > -1){
            post.style.display = "";
        } else {
            post.style.display = "none";
        }
        
    }
    console.log(filterData);
}

export default filterFunction;
