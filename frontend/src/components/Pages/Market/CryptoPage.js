import NavBar from '../../NavBar/NavBar';
import useFetch  from '../../../hooks/useFetch';


function CryptoCoin() {

  const url = window.location.href;
 
  const {data: marketData, isLoading, error} = useFetch("http://localhost:5000/market/main" + url.substring(url.lastIndexOf('/')));

  if (isLoading) {
    return(<div></div>)
  }

  return <div id="crypto_page">
      <NavBar/>
      <h1>Cryptocurrency Data</h1>
      <p> Name: {marketData.name}</p>
      <p> Symbol: {marketData.symbol}</p>
      <p> Price: ${marketData.quote.USD.price}</p>
      <p> 24h Change: {marketData.quote.USD.percent_change_24h}%</p>
      <p> 7d Change: {marketData.quote.USD.percent_change_7d}%</p>
      <p> 30d Change: {marketData.quote.USD.percent_change_30d}%</p>
      <p> Market Cap: ${marketData.quote.USD.market_cap}</p>

  </div>;
}

export default CryptoCoin;