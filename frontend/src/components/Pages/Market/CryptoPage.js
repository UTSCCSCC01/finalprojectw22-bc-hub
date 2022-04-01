import NavBar from '../../NavBar/NavBar';
import CryptoChart from './cryptoChart';
import useFetch  from '../../../hooks/useFetch';
import './MarketPage.css'
import { Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
function butFun() {
  console.log("HELLO");
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


  return <div class="main-crypto-page" id="crypto_page" style={{minHeight: 1000}}>
      <NavBar/>
      <Container className=' align-items-center justify-content-center' align={"center"}>
      <CryptoChart dates={dateData} prices={priceData} coin={coin} />
      <Link to='/market'>
        <button className='button-31 m-2' style={{width: 200}}>Back</button>
      </Link>
      <ToggleButtonGroup type='radio' name='options' defaultValue={1} className='m-5' variant='outline-dark'>

        <ToggleButton id='tbg-radio-1' value={1} onClick={butFun} variant="dark">
          24h
        </ToggleButton>
        <ToggleButton id='tbg-radio-2' value={2} onClick={butFun} variant="dark">
          12d
        </ToggleButton>
        <ToggleButton id='tbg-radio-3' value={3} onClick={butFun} variant="dark">
          2.5m
        </ToggleButton>
        <ToggleButton id='tbg-radio-4' value={4} onClick={butFun} variant="dark">
          9m
        </ToggleButton>

      </ToggleButtonGroup>
      
      
        
      </Container>
      
      
      

  </div>;
}

export default CryptoCoin;