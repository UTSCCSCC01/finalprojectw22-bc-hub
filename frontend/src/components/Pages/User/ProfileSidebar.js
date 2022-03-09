import { Button } from "react-bootstrap";
import { useState } from "react";
import './ProfileSidebar.css';

const ProfileSideBar = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="d-flex flex-column justify-content-center h-100" style={{"overflow": "hidden", "position": "fixed", "backgroundColor": 'pink', 'widith': 50}}>
            <div className='d-flex'>
                <a href="/" className='btn d-flex hov'>
                    <i class="bi bi-person-circle me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>Personal Feed</h5>
                </a>
            </div>
            <div className='d-flex'>
                <a href="/" className='btn d-flex hov'>
                    <i class="bi bi-graph-up me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>Trending Feed</h5>
                </a>
            </div>
            <div className='d-flex'>
                <a href="#" className='btn d-flex hov'>
                    <i class="bi bi-sticky me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>My Posts</h5>
                </a>
            </div>    
        </div>
        

    );
}

export default ProfileSideBar;