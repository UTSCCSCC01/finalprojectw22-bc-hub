import React from 'react';
import { Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from "../../../hooks/useFetch"
import { Link } from 'react-router-dom';
import UserSendHttpRequest from './UserHttpHandler';

function deleteCurrRow(symbol, lst) {
  // return index of row
  const followTab = document.getElementById('follow-table-pro');
  var tbindex = lst.indexOf(symbol) + 1;
  lst.splice(tbindex - 1, 1);
  followTab.deleteRow(tbindex);
  console.log('SYMMMMMMMMMMMMMMMMMMMMMMMMM------' + symbol);
  var unfollowSym = {
    "newCrypto" : symbol
  }
  sendCurData(unfollowSym);
}

function sendCurData(info) {
  UserSendHttpRequest('POST', 'http://localhost:5000/unfollowCurrency', info).then(responseData => {console.log(responseData)})
}

const Currency = (props) => {


    const coinData = props.userCurrency;
    console.log('coinDataAiden');
    console.log(coinData);
    const {data: marketData, isLoading, error} = useFetch("http://localhost:5000/market/main");
    

    if (isLoading) {
      return(<div></div>)
    }
    
    const dataArr = [];
    for (var i = 0; i < coinData.length; i++){
      for (var j = 0; j < marketData.length; j++){
        if (marketData[j].symbol == coinData[i]){
          dataArr.push([coinData[i], marketData[j].quote.USD.price]);
        }
      }
    }

    return (
    <div id='Currency'>
        <h3>Followed Currencies</h3>
        <Table striped bordered hover id='follow-table-pro'>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length: dataArr.length}).map((_, i) => (
              <tr>
                <td><Link to={'/market/' + dataArr[i][0]}>{dataArr[i][0]}</Link></td>
                <td>{dataArr[i][1]}</td>
                <td>
                <Button variant='outline-dark' className='mx-2' onClick={() => {deleteCurrRow(dataArr[i][0], coinData)}}>unfollow</Button>
                </td>
                
                
              </tr>
            ))}
          </tbody>
        </Table>
        <hr/>
    </div>
    );
}

export default Currency;
