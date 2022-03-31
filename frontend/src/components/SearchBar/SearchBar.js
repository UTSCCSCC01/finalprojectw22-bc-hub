import 'bootstrap/dist/css/bootstrap.css'
import './SearchBar.css'

function SearchBar(props){
    
    if (props.haveBut){
        return (
            <div className="input-group mb-3" id="searchbar">
                <input type="text" className="form-control" placeholder={props.text} 
                aria-label="Search" aria-describedby="basic-addon2" id="my-input" onKeyUp={()=>props.inFun(props.param)}/>
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={()=>props.butFun(props.param)} id="search-but">Search</button>
                </div>
            </div>
            
        );
    } else{
        return (
            <div className="input-group mb-3" id="searchbar">
                <input type="text" className="form-control" placeholder={props.text} 
                aria-label="Search" aria-describedby="basic-addon2" id="my-input" onKeyUp={()=>props.inFun(props.param)}/>
                <div className="input-group-append">
                </div>
            </div>
        );
    }
    
}
export default SearchBar;