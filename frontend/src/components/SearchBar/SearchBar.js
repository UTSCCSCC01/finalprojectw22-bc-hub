import 'bootstrap/dist/css/bootstrap.css'
import './SearchBar.css'

function SearchBar(props){
    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter symbol" 
            aria-label="Search" aria-describedby="basic-addon2" id="my-input" onChange={()=>props.fun1(props.param)}/>
            <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" onClick={()=>props.fun(props.param)}>Search</button>
            </div>
        </div>
    );
    
}
export default SearchBar;