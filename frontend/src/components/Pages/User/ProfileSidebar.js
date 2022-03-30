import { useState } from "react";
import './ProfileSidebar.css';
import { Link, animateScroll} from "react-scroll";

const ProfileSideBar = (props) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="d-flex flex-column h-100 w-20 " style={{"overflow": "hidden", "position": "fixed", "backgroundColor": 'pink', zIndex: 10}}>
            <div className='d-flex'>
                <Link className='btn d-flex hov' style={{'width': 250, borderRadius: 0}} to='ProfileMain' smooth={true} duration={300} offset={-80}>
                    <i className="bi bi-person-circle me-3" style={{"font-size": "1.2rem"}} ></i>
                    {props.isOwner ?
                        <h5>My Profile</h5>
                        :
                        <h5>Profile</h5>
                    }
                </Link>
            </div>
            <div className='d-flex'>
                <Link href="/" className='btn d-flex hov' style={{'width':250, borderRadius: 0}} to='Currency' smooth={true} duration={300} offset={-80}>
                    <i className="bi bi-currency-bitcoin me-3" style={{"fontSize": "1.2rem"}}></i>
                    <h5>Currency</h5>
                </Link>
            </div>
            <div className='d-flex'>
                <Link className='btn d-flex hov' style={{'width': 250, borderRadius: 0}} to='LearnProgress' smooth={true} duration={300} offset={-80} >
                    <i className="bi bi-file-earmark-bar-graph me-3" style={{"fontSize": "1.2rem"}}></i>
                    <h5>Learn Progress</h5>
                </Link>
            </div>
            <div className='d-flex'>
                <Link className='btn d-flex hov' style={{'width': 250, borderRadius: 0}} to='UserPost' smooth={true} duration={300} offset={-80} >
                        <i className="bi bi-sticky me-3" style={{"fontSize": "1.2rem"}}></i>
                        {props.isOwner ?
                            <h5>My Posts</h5>
                            :
                            <h5>Posts</h5>
                        }
                </Link>
            </div>    
        </div>
        

    );
}

export default ProfileSideBar;