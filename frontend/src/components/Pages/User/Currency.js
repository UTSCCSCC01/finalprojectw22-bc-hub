import React from 'react';
import { Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const Currency = () => {
    return (
    <div id='Currency'>
        <h3>Followed Currencies</h3>
        <Table striped bordered hover id='follow-table'>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
            </tr>
          </thead>
        </Table>
        <hr/>
    </div>
    );
}

export default Currency;
