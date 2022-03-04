import {Modal, Button, Form, Card} from 'react-bootstrap';
import ShowMoreText from 'react-show-more-text';
import sendHttpRequest from './HttpHandler';


const ReplyCommentModal = (props) => {

    function postReply(info) {
        sendHttpRequest('POST', `http://localhost:5000/community/${props.post._id}/comments/${props.parent._id}`, info)
        .then(res => {
            if (!res.ok){
                // Should probabably display a message to the user telling them that the delete failed
                throw Error('Failed to post reply')
            }
            console.log('comment posted')
        })
        .catch(err => {
            alert(err);
        })
    }

    function getText(id) {
        var txt = document.getElementById(id).value;
        return txt;
    }

    function Post() {
        let desc = getText('replyText')
        if (!desc){
            return
        }
        var po = {
            "description" : desc,
        }
        postReply(po);
        props.onHide()
        window.location.reload();
    }

    return (  
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reply to John Cena's Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex flex-row align-items-center"> 
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <div className='d-flex flex-column'>
                    <Card.Subtitle>
                        John Cena
                    </Card.Subtitle>
                    <Card.Text>
                        {props.parent.dateString}
                    </Card.Text>
                </div>
        </div>
        <div className='ms-2'>
            <Card.Text className='text-wrap' style={{ marginLeft: '48px' }}>
            <ShowMoreText lines={3} more="Show more" less="Show less" expanded={false} width={0} truncatedEndingComponent={"... "}>
                {props.parent.description}
            </ShowMoreText>
            </Card.Text>
        </div>
        <Form className="d-flex justify-content-center mt-4" id="comment-section">
                <Form.Control id="replyText" as="textarea" placeholder="What are your thoughts?" required className = 'w-75 rounded-0 rounded-top'/>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={Post}>Post Reply</Button>
        </Modal.Footer>
      </Modal>
    );
}
 
export default ReplyCommentModal;