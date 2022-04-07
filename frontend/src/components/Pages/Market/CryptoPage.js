import NavBar from '../../NavBar/NavBar';
import useFetch  from '../../../hooks/useFetch';
import './MarketPage.css'
import { Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function formatData(gData){
  let dates = []
  let prices = [];
  for (var i = gData.length - 1; i >= 0; i--){
    dates.push(gData[i][0]);
    prices.push(gData[i][1]);
  }
  return [dates, prices];
}


function CryptoCoin() {

  const url = window.location.href;
  const coin = url.substring(url.lastIndexOf('/')).substring(1);
  

  const {data: graphData, isLoading, error} = useFetch("http://localhost:5000/market/" + coin  + '/' + '300');
  const {data: graphData1, isLoading1, error1} = useFetch("http://localhost:5000/market/" + coin  + '/' + '3600'); 
  const {data: graphData2, isLoading2, error2} = useFetch("http://localhost:5000/market/" + coin  + '/' + '21600');
  const {data: graphData3, isLoading3, error3} = useFetch("http://localhost:5000/market/" + coin  + '/' + '86400');
  const [dateData, setdateData] = useState([]);
  const [priceData, setpriceData] = useState([]);

  // Pages that dont work: XRP, LUNA, BUSD, USDC, NEAR, TRX, LEO, BTCB, VET, HBAR, EGLD, SAND, XMR, FTM, THETA, RUNE, KLAY
  const butFun = (gData) => {
    const sel_head = document.getElementById("select-header");
    sel_head.style.display = "none";
    let [temp_dates, temp_prices] = formatData(gData);
    setdateData(temp_dates);
    setpriceData(temp_prices);
  }

  useEffect(() => {
    if (isLoading || isLoading1 || isLoading2 || isLoading3) {
      return(<div>?? </div>)
    }
      let [dates, prices] = formatData(graphData);
      setdateData(dates);
      setpriceData(prices);
    
  }, [graphData]);

  
  

  if (isLoading || isLoading1 || isLoading2 || isLoading3) {
    return(<div></div>)
  }

  let [dates, prices] = formatData(graphData);


  return <div class="main-crypto-page" id="crypto_page" style={{minHeight: 1000}}>
      <NavBar/>
      <Container className=' align-items-center justify-content-center' align={"center"}>
      <div className="shadow-lg " style={{backgroundColor:'RGB(255, 255, 255)', marginTop: 110}}>
            <Line id='line-graph'
                data={{
                    labels: dateData,
                    datasets: [{
                        label: coin,
                        data: priceData,
                        borderColor: 'RGB(99, 86, 219)'
                    }]
                }}
                height={600}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                maxTicksLimit: 8, 
                                color: 'black'                             
                            },
                            title: {
                              display: true,
                              text: "Dates"
                            }
                            
                        },
                        y: {
                            ticks: {
                                color: 'black'                             
                            },
                            title: {
                              display: true,
                              text: "USD"
                            }
                            
                        }

                    }
                }}
            />
        </div>

      <Link to='/market'>
        <button className='button-31 m-2' style={{width: 200}}>Back to Market</button>
      </Link>
      <ToggleButtonGroup type='radio' name='options' defaultValue={1} className='m-5' variant='outline-dark'>

        <ToggleButton id='tbg-radio-1' value={1} onClick={() => butFun(graphData)} variant="dark">
          24h
        </ToggleButton>
        <ToggleButton id='tbg-radio-2' value={2} onClick={() => butFun(graphData1)} variant="dark">
          12d
        </ToggleButton>
        <ToggleButton id='tbg-radio-3' value={3} onClick={() => butFun(graphData2)} variant="dark">
          2.5m
        </ToggleButton>
        <ToggleButton id='tbg-radio-4' value={4} onClick={() => butFun(graphData3)} variant="dark">
          9m
        </ToggleButton>

      </ToggleButtonGroup>
      <h3 id='select-header'>Please select a time to display</h3>
      </Container>
      
      
  </div>;
}

export default CryptoCoin;