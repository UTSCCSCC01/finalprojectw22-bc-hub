import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';
import useFetch  from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table'
import './MarketPage.css'

function searchFun(param) {
  const inVal = document.getElementById('my-input').value;
  const txtVal = inVal.toUpperCase();
  for (var i = 0; i < param.length; i++){
    if (param[i].symbol.toUpperCase() == txtVal || param[i].name.toUpperCase() == txtVal){
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

function butFun(bText){
  const but = document.getElementById('table-but' + bText)
  if (but.value == 'follow'){
    but.value = 'unfollow';
    but.innerText = 'unfollow';
  } else {
    but.value ='follow';
    but.innerText = 'follow';
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
                  <td id="but-col"><button id={"table-but" + index1} class="btn btn-outline-secondary" 
                  type="buton" onClick={()=>butFun(index1)} value='follow' innerText='follow'>follow</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
  </div>;
}

export default Market;
