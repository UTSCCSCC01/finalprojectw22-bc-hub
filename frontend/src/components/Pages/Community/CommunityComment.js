import {Card, Button, Accordion, Form, Modal} from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import ShowMoreText from "react-show-more-text";
import useFetch from '../../../hooks/useFetch';
import ReplyCommentModal from './ReplyCommentModal';

const CommunityComment = (props) => {
    let comment = props.comment;
    console.log("Length of comments is " + comment.comments.length)
    let post = props.post;
    const {data: replies, isLoading, error}  = useFetch(`http://localhost:5000/community/${post._id}/comments/${comment._id}`);
    const [modalShow, setModalShow] = React.useState(false);


    return (  
    <div className='mb-3 mx-3 p-2 bg-dark rounded bg-opacity-10'>
        <div className="d-flex flex-row justify-content-between align-items-center mb-1">
            <div className="d-flex flex-row align-items-center"> 
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <div className='d-flex flex-column'>
                    <Card.Subtitle>
                        John Cena
                    </Card.Subtitle>
                    <Card.Text>
                        {comment.dateString}
                    </Card.Text>
                </div>
            </div>
            {/* <Button>Reply</Button> */}

            <Button variant="primary" onClick={() => setModalShow(true)}>
                Reply
            </Button>

            <ReplyCommentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                post={post}
                parent={comment}
            />
        </div>
        <div className='ms-2'>
            <Card.Text className='text-wrap' style={{ marginLeft: '48px' }}>
            <ShowMoreText lines={3} more="Show more" less="Show less" expanded={false} width={0} truncatedEndingComponent={"... "}>
                {comment.description}
            </ShowMoreText>
            </Card.Text>
        </div>


        {comment.comments.length !== 0 && 
            <div className="mt-2">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={comment.id}>
                        <Accordion.Header>See replies</Accordion.Header>
                        <Accordion.Body>
                            {error && <div>{error}</div>}
                            {isLoading && <div>Loading Replies...</div>}
                            {replies && 
                            <div>
                                {replies.map((reply) => (
                                    <div className='mb-2'>
                                            <div className="d-flex flex-row align-items-center"> 
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                </svg>
                                                <div className='d-flex flex-column'>
                                                    <Card.Subtitle>
                                                        John Cena
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                        {reply.dateString}
                                                    </Card.Text>
                                                </div>
                                            </div>
                                            <div className='ms-2'>
                                                <Card.Text className='text-wrap' style={{ marginLeft: '48px' }}>
                                                <ShowMoreText lines={3} more="Show more" less="Show less" expanded={false} width={0} truncatedEndingComponent={"... "}>
                                                    {reply.description}
                                                </ShowMoreText>
                                                </Card.Text>
                                            </div>    
                                    </div>
                                ))}
                            </div>
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        }
    </div>
    );
}
 
export default CommunityComment;