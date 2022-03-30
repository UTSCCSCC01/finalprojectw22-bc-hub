import React from 'react';
import { Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from "../../../hooks/useFetch"

const Currency = (props) => {
    const {data: userData, isLoading, error} = useFetch("http://localhost:5000/users/" + props.userID);

    if (isLoading){
      return(
        <div></div>
      )
    }

    const coinData = userData.followingCryptos;
    coinData.push("BTC", "ETH");
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
          <tbody>
            {Array.from({length: coinData.length}).map((_, i) => (
              <tr>
                <td>hello</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <hr/>
    </div>
    );
}

export default Currency;
