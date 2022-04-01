import NavBar from '../../NavBar/NavBar';
import CryptoChart from './cryptoChart';
import useFetch  from '../../../hooks/useFetch';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function butFun(gData) {
  let {dateData, priceData} = formatData(gData);
  

}

function formatData(gData){
  let dateData = [];
  let priceData = [];
  for (var i = gData.length-1; i >= 0; i--){
    dateData.push(gData[i][0]);
    priceData.push(gData[i][1]);
  }
  console.log(dateData)
  return {dateData, priceData};
}


function CryptoCoin() {

  const url = window.location.href;
  const coin = url.substring(url.lastIndexOf('/')).substring(1);

  const {data: graphData, isLoading, error} = useFetch("http://localhost:5000/market/" + coin  + '/' + '300');
  const {data: graphData1, isLoading1, error1} = useFetch("http://localhost:5000/market/" + coin  + '/' + '3600');
  const {data: graphData2, isLoading2, error2} = useFetch("http://localhost:5000/market/" + coin  + '/' + '21600');
  const {data: graphData3, isLoading3, error3} = useFetch("http://localhost:5000/market/" + coin  + '/' + '86400');

  // Pages that dont work: XRP, LUNA, BUSD, USDC, NEAR, TRX, LEO, BTCB, VET, HBAR, EGLD, SAND, XMR, FTM, THETA, RUNE, KLAY
  console.log(coin);
  if (isLoading || isLoading1 || isLoading2 || isLoading3) {
    return(<div></div>)
  }
  
  const {dateData, priceData} = formatData(graphData)


  return <div id="crypto_page">
      <NavBar/>
      <ToggleButtonGroup type='radio' name='options' defaultValue={1}>

        <ToggleButton id='tbg-radio-1' value={1} onClick={() => butFun(graphData)}>
          24h
        </ToggleButton>
        <ToggleButton id='tbg-radio-2' value={2} onClick={() => butFun(graphData1)}>
          12d
        </ToggleButton>
        <ToggleButton id='tbg-radio-3' value={3} onClick={() => butFun(graphData2)}>
          2.5m
        </ToggleButton>
        <ToggleButton id='tbg-radio-3' value={3} onClick={() => butFun(graphData3)}>
          9m
        </ToggleButton>

      </ToggleButtonGroup>
      <CryptoChart dates={dateData} prices={priceData} coin={coin}/>
      
      

  </div>;
}

export default CryptoCoin;