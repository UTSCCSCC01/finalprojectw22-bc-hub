import { Button } from "react-bootstrap";
import { useState } from "react";
import './ProfileSidebar.css';

const ProfileSideBar = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="d-flex flex-column h-100 w-20 " style={{"overflow": "hidden", "position": "fixed", "backgroundColor": 'pink', zIndex: 10}}>
            <div className='d-flex'>
                <a href="/" className='btn d-flex hov' style={{'width': 200, borderRadius: 0}}>
                    <i class="bi bi-person-circle me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>My Profile</h5>
                </a>
            </div>
            <div className='d-flex'>
                <a href="/" className='btn d-flex hov' style={{'width': 200, borderRadius: 0}}>
                    <i class="bi bi-currency-bitcoin me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>Currency</h5>
                </a>
            </div>
            <div className='d-flex'>
                <a href="/" className='btn d-flex hov' style={{'width': 200, borderRadius: 0}}>
                    <i class="bi bi-file-earmark-bar-graph me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>Learn Progress</h5>
                </a>
            </div>
            <div className='d-flex'>
                <a href="#" className='btn d-flex hov' style={{'width': 200, borderRadius: 0}}>
                    <i class="bi bi-sticky me-3" style={{"font-size": "1.2rem"}}></i>
                    <h5>My Posts</h5>
                </a>
            </div>    
        </div>
        

    );
}

export default ProfileSideBar;