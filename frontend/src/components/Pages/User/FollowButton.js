import {Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';


const FollowButton = (props) => {
    const [buttonText, setButtonText] = useState(props.user.followingUsers.includes(props.id) ? 'Unfollow' : 'Follow');
    const [color, setColor] = useState(props.user.followingUsers.includes(props.id) ? 'danger' : 'primary')

    const clickFollow = () => {
        fetch(`http://localhost:5000/users/${props.id}/follow-unfollow/`, 
                {method: 'POST', 
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
        })
        .then(res => {
            if (!res.ok){
                throw Error('Failed to Follow/Unfollow')
            }
            return res.json();
        })
        .then(body => {
            window.location.reload();
            // setButtonText(body.code > 0 ? 'Unfollow' : 'Follow')
        })
        .catch(err => {
            console.log(err)
            alert(err);
        });
    }

    return ( 
        <Button variant={color} className='me-2' onClick={clickFollow}>{buttonText}</Button>
     );
}
 
export default FollowButton;