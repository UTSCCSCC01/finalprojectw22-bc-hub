import React from 'react';
import { Table, Form} from 'react-bootstrap';
import UserSendHttpRequest from './UserHttpHandler';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import useFetch from '../../../hooks/useFetch';

export function chkBox() {
  return (
    <div>
        <Form.Check aria-label="option 1" />
        <Form.Check type="radio" aria-label="radio 1" />
    </div>
  )
}

function sendProData(info) {
    UserSendHttpRequest('POST', 'http://localhost:5000/updateEducationProgress', info).then(responseData => {console.log(responseData)})
}

function sendProg(setfunc, bool_val, index) {
    setfunc(bool_val)

    var po_progress = {
        "index" : index,
        "newProgress" : bool_val
    }

    sendProData(po_progress);
}

const Learnprogress = (props) => {
    // console.log('Owner???' + Progresses.isOwner);
    const [Owner, setOwner] = useState(false)
    // sendProData(prog);
    // sendProData(po_progress_i);
    const {data: User, isLoading, error}  = useFetch('http://localhost:5000/users/username/' + props.username);

    const [b0, setb0] = useState(false);
    const [b1, setb1] = useState(false);
    const [b2, setb2] = useState(false);

    const [i0, seti0] = useState(false);
    const [i1, seti1] = useState(false);
    const [i2, seti2] = useState(false);

    const [a0, seta0] = useState(false);
    const [a1, seta1] = useState(false);
    const [a2, seta2] = useState(false);


    useEffect(() => {
        if (User){
            setb0(User.educationProgress[0])
            setb1(User.educationProgress[1])
            setb2(User.educationProgress[2])
            seti0(User.educationProgress[3])
            seti1(User.educationProgress[4])
            seti2(User.educationProgress[5])
            seta0(User.educationProgress[6])
            seta1(User.educationProgress[7])
            seta2(User.educationProgress[8])
            setOwner(props.isLoggedIn.loggedIn && props.isLoggedIn.user.username === User.username)
        }
    }, [User]);

    

    return (
        <div id='LearnProgress' style={{scrollMargin: '200px'}}>
            <h3>Learning Progress</h3>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading posts...</div>}
            {User && 
                <Table striped bordered hover style={{width: 1000}}>
                    <tbody >
                        
                        <tr>
                        <th>Beginner</th>
                        <td><Form.Check disabled={!Owner} label='What is Crypto Currency' checked={b0} onChange={() => {sendProg(setb0, !b0, 0)}}/></td>
                        <td><Form.Check disabled={!Owner} label='Beginner Crypto-App' checked={b1} onChange={() => {sendProg(setb1, !b1, 1)}}/></td>
                        <td><Form.Check disabled={!Owner} label='How to Find Crypto Trend' checked={b2} onChange={() => {sendProg(setb2, !b2, 2)}}/></td>
                        </tr>
                        <tr>
                        <th>Intermediate</th>
                        <td><Form.Check disabled={!Owner} label='Investment Choice' checked={i0} onChange={() => {sendProg(seti0, !i0, 3)}}/></td>
                        <td><Form.Check disabled={!Owner} label='Global Economical Effect' checked={i1} onChange={() => {sendProg(seti1, !i1, 4)}}/></td>
                        <td><Form.Check disabled={!Owner} label='Types of Digital Currencies' checked={i2} onChange={() => {sendProg(seti2, !i2, 5)}}/></td>
                        </tr>
                        <tr>
                        <th>Advanced</th>   
                        <td><Form.Check disabled={!Owner} label='Crypto v. Token' checked={a0} onChange={() => {sendProg(seta0, !a0, 6)}}/></td>
                        <td><Form.Check disabled={!Owner} label='Risk of Crypto Trade' checked={a1} onChange={() => {sendProg(seta1, !a1, 7)}}/></td>
                        <td><Form.Check disabled={!Owner} label='Blockchain' checked={a2} onChange={() => {sendProg(seta2, !a2, 8)}}/></td>
                        </tr>
                    </tbody>
                </Table>
            }
            <hr/>
        </div>
    );
}

export default Learnprogress;
