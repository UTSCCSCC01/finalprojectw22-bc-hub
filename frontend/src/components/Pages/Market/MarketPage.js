import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';
import useFetch  from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table'
import './MarketPage.css'

const followArr = [];


function searchFun(param) {
  const inVal = document.getElementById('my-input').value;
  const txtVal = inVal.toUpperCase();
  for (var i = 0; i < param.length; i++){
    if (param[i].symbol.toUpperCase() == txtVal || param[i].name.toUpperCase() == txtVal){
      window.location = "market/" + param[i].symbol;
    }
  }
}

function filterFun(param){
  const input = document.getElementById('my-input').value;
  const table = document.getElementById('market-table');
  const tr = table.getElementsByTagName("tr");
  const filter = input.toUpperCase();
  
  
  for (var i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else{
        tr[i].style.display = "none";
      }
    }
  }
}

function butFun(rowNum, marketData){
  const but = document.getElementById('table-but' + rowNum);
  const followTab = document.getElementById('follow-table');
  
  if (but.value == 'follow'){
    but.value = 'unfollow';
    but.innerText = 'unfollow';
    followArr.push(marketData[rowNum]);

    const row = followTab.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = marketData[rowNum].symbol;
    cell2.innerHTML = marketData[rowNum].quote.USD.price;
    
  } else {
    but.value ='follow';
    but.innerText = 'follow';
    const rowIndex = followArr.length - 1 - followArr.indexOf(marketData[rowNum])
    console.log(followArr.indexOf(marketData[rowNum]));
    followTab.deleteRow(rowIndex);
    followArr.splice(followArr.indexOf(marketData[rowNum]), 1);
  }
}

function Market() {
 
  const {data: marketData, isLoading, error} = useFetch("http://localhost:5000/market/main");

  if (isLoading) {
    return(<div></div>)
  }

  return <div id="market_page">
      <NavBar/>
      <div id='follow-section'>
        <h3>Followed Currencies</h3>
        <Table striped bordered hover id='follow-table'>
          <thead>
            <th>Coin</th>
            <th>Price</th>
          </thead>
        </Table>
      </div>
      <div id="datatable">
      <SearchBar butFun={searchFun} param={marketData.data} inVal={document.getElementById("my-input")} inFun={filterFun}
      text={"Enter Symbol"}/>

        <Table striped bordered hover id="market-table">
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
                <td><a href={"market/" + marketData.data[index1].symbol}>{marketData.data[index1].symbol}</a></td>
                  <td>{marketData.data[index1].quote.USD.price}</td>
                  <td>{marketData.data[index1].quote.USD.percent_change_24h}</td>
                  <td>{marketData.data[index1].quote.USD.percent_change_7d}</td>
                  <td id="but-col"><button id={"table-but" + index1} class="btn btn-outline-secondary" 
                  type="buton" onClick={()=>butFun(index1, marketData.data)} value='follow'>follow</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
  </div>;
}

export default Market;
