import {useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import NavBar from '../../NavBar/NavBar';
import DetailedViewCard from "./DetailedViewCard";
import NotFoundPage from "../NotFoundPage"; 

const CommunityDetailedView = () => {
    let params = useParams();
    console.log('http://localhost:5000/community/' + params.id)
    const {data: post, isLoading, error}  = useFetch('http://localhost:5000/community/' + params.id);
    if (error){
        console.log(error)
    }
    console.log(post)
    return (  
        <div>
            {/* Add the sidebar here! */}
            {/* {error && <div><NavBar></NavBar>{error}</div>} */}
            {isLoading && <div><NavBar></NavBar>Loading detailed view...</div>}

            {post &&
                <div>
                    <NavBar></NavBar>
                    <div className="d-flex justify-content-center">
                        <DetailedViewCard post={post}></DetailedViewCard>
                    </div>
                </div>}
            {(!post || error) && !isLoading && <NotFoundPage></NotFoundPage>}
            
        </div>
    );
}
 
export default CommunityDetailedView;