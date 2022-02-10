import React, { Component, useEffect, useState } from 'react';
import NavBar from '../../NavBar/NavBar';
import useFetch  from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table'
import './MarketPage.css'

function Market() {


  const {data: marketData, isLoading, error} = useFetch("http://localhost:5000/market/main");


  if (isLoading) {
    return(<div>loading</div>)
  }
  
  return <div id="market_page">
      <NavBar/>
      <h1>Market Section</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price (USD)</th>
            <th>24h</th>
            <th>7d</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({length: marketData.data.length}).map((_, index1) => (
            <tr>
              <td><a href={"/" + marketData.data[index1].symbol}>{marketData.data[index1].symbol}</a></td>
                <td>{marketData.data[index1].quote.USD.price}</td>
                <td>{marketData.data[index1].quote.USD.percent_change_24h}</td>
                <td>{marketData.data[index1].quote.USD.percent_change_7d}</td>
            </tr>
          ))}
        </tbody>

      </Table>
      

  </div>;
}

export default Market;
