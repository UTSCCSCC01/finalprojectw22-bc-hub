import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';
import useFetch  from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table'
import './MarketPage.css'

function searchFun(param) {
  const inVal = document.getElementById('my-input').value;
  for (var i = 0; i < param.length; i++){
    if (param[i].symbol == inVal || param[i].name == inVal){
      window.location = "/" + param[i].symbol;
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
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


function Market() {
 
  const {data: marketData, isLoading, error} = useFetch("http://localhost:5000/market/main");

  if (isLoading) {
    return(<div></div>)
  }

  return <div id="market_page">
      <NavBar/>
      <h1>Market Section</h1>
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
                <td><a href={"/" + marketData.data[index1].symbol}>{marketData.data[index1].symbol}</a></td>
                  <td>{marketData.data[index1].quote.USD.price}</td>
                  <td>{marketData.data[index1].quote.USD.percent_change_24h}</td>
                  <td>{marketData.data[index1].quote.USD.percent_change_7d}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
  </div>;
}

export default Market;
