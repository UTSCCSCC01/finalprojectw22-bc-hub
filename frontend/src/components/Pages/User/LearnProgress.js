import React from 'react';
import { Table, Form} from 'react-bootstrap';


export function chkBox() {
  return (
    <div>
        <Form.Check aria-label="option 1" />
        <Form.Check type="radio" aria-label="radio 1" />
    </div>
  )
}

const Learnprogress = (Progresses) => {
    console.log(Progresses);
    console.log('HGUIHIUESGIUSEGIUO')
    return (
        
        <div id='LearnProgress' style={{scrollMargin: '200px'}}>
            <h3>Learning Progress</h3>
            <Table striped bordered hover style={{width: 750}}>
            <thead>
                <tr>
                <th>Beginner</th>
                <th>Intermediate</th>
                <th>Advanced</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                <Form.Check label='What is Crypto Currency' checked={Progresses[0]} />
                </td>
                <td><Form.Check label='Beginner Crypto-App' checked={Progresses[1]}/></td>
                <td><Form.Check label='How to Find Crypto Trend' checked={Progresses[2]}/></td>
                </tr>
                <tr>
                <td><Form.Check label='Investment Choice' checked={Progresses[3]}/></td>
                <td><Form.Check label='Global Economical Effect' checked={Progresses[4]} /></td>
                <td><Form.Check label='Types of Digital Currencies' checked={Progresses[5]} /></td>
                </tr>
                <tr>
                <td><Form.Check label='Crypto v. Token' checked={Progresses[6]}/></td>
                <td><Form.Check label='Risk of Crypto Trade' checked={Progresses[7]}/></td>
                <td><Form.Check label='Blockchain' checked={Progresses[8]}/></td>
                </tr>
            </tbody>
            </Table>
            <hr/>
        </div>
    );
}

export default Learnprogress;
