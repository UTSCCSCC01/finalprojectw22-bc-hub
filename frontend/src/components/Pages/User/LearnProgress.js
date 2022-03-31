import React from 'react';
import { Table, Form} from 'react-bootstrap';
import UserSendHttpRequest from './UserHttpHandler';
import { useState } from 'react';

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

const Learnprogress = (Progresses) => {
    // console.log('Owner???' + Progresses.isOwner);
    var Owner = Progresses.isOwner;
    // sendProData(prog);
    // sendProData(po_progress_i);
    const [b0, setb0] = useState(Progresses.Progresses[0]);
    const [b1, setb1] = useState(Progresses.Progresses[1]);
    const [b2, setb2] = useState(Progresses.Progresses[2]);

    const [i0, seti0] = useState(Progresses.Progresses[3]);
    const [i1, seti1] = useState(Progresses.Progresses[4]);
    const [i2, seti2] = useState(Progresses.Progresses[5]);

    const [a0, seta0] = useState(Progresses.Progresses[6]);
    const [a1, seta1] = useState(Progresses.Progresses[7]);
    const [a2, seta2] = useState(Progresses.Progresses[8]);

    

    return (
        <div id='LearnProgress' style={{scrollMargin: '200px'}}>
            <h3>Learning Progress</h3>
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
            <hr/>
        </div>
    );
}

export default Learnprogress;
