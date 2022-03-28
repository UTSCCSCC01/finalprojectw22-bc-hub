import NavBar from '../../NavBar/NavBar';
import CryptoChart from './cryptoChart';
import useFetch  from '../../../hooks/useFetch';


function CryptoCoin() {

  //const url = window.location.href;
  const {data: graphData, isLoading, error} = useFetch("http://localhost:5000/market/BTC-Test");

 
  if (isLoading) {
    return(<div></div>)
  }
  
  const priceData = [];
  const dateData = [];

  for (var i = graphData.length-1; i >= 0; i--){
    dateData.push(graphData[i][0]);
    priceData.push(graphData[i][1]);
  }


  return <div id="crypto_page">
      <NavBar/>
      <CryptoChart dates={dateData} prices={priceData}/>
      
      

  </div>;
}

export default CryptoCoin;