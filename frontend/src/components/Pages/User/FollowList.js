import { useState, useEffect } from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"



const FollowList = ({closeModal, userId, type}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState(null)
    console.log(userId)

    useEffect(() => {
        fetch(`http://localhost:5000/users/followers/${type.toLowerCase()}/${userId}`, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
        })
        .then(response =>{ 
            if (!response.ok){
                throw response.status
            }
            return response.json()
        })
        .then(response => {
            setUsers(response)
            setIsLoading(false)
        })
        .catch(e => {
            console.log(e)
        })
    }, []);

    return (
        <div className='m-3 rounded-3 shadow-lg overflow-auto' style={{width:500, height: 300, position: 'fixed', top: '20%', right: '30%', zIndex: 12, backgroundColor: 'pink' }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title className="m-2">{type}</Card.Title>
                    <Button variant="light" className='m-2' onClick={() => {closeModal(false)}}>
                        Close
                    </Button>
                </div>
                {isLoading && <div>Loading {type}...</div>}
                {users && 
                    <div>
                        {console.log(users.length)}
                        {users.map((u) => (
                            <>
                                <hr/>
                                <div className="d-flex flex-row justify-content-between align-items-center hov"> 
                                    {u && u.profilePicture ?
                                        <Link to={`/profile/${u.username}`} onClick={() => {closeModal(false)}} style={{color: 'inherit', textDecoration: 'inherit'}}>
                                            <img
                                                className="mx-2 Navsquare" 
                                                src={u.profilePicture} 
                                                alt={u.username + " profile picture"} 
                                                style={{height: '48px', width: '48px'}}
                                            />
                                        </Link>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="me-2 bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    }
                                    <div className='d-flex mx-2 flex-column'>
                                        <Card.Subtitle>
                                            {u && <Link to={`/profile/${u.username}`}  onClick={() => {closeModal(false)}} style={{color: 'inherit', textDecoration: 'inherit'}}>{u.username}</Link>}
                                        </Card.Subtitle>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                }
        </div>
    );
}
 
export default FollowList;