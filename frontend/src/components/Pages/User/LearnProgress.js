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

const Learnprogress = () => {
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
                <Form.Check label='What is Crypto Currency' />
                </td>
                <td><Form.Check label='Beginner Crypto-App' checked='true'/></td>
                <td><Form.Check label='How to Find Crypto Trend' /></td>
                </tr>
                <tr>
                <td><Form.Check label='Investment Choice' /></td>
                <td><Form.Check label='Global Economical Effect' /></td>
                <td><Form.Check label='Types of Digital Currencies' checked='true' /></td>
                </tr>
                <tr>
                <td><Form.Check label='Crypto v. Token' /></td>
                <td><Form.Check label='Risk of Crypto Trade' /></td>
                <td><Form.Check label='Blockchain' /></td>
                </tr>
            </tbody>
            </Table>
            <hr/>
        </div>
    );
}

export default Learnprogress;
