import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState } from 'react';

const CryptoChart = (props) => {
   
    const [dates, setDates] = useState(props.dates);
    const [prices, setPrices] = useState(props.prices);
    return (
        <div className="cryptoChart">
            <Line 
                data={{
                    labels: dates,
                    datasets: [{
                        label: props.coin,
                        data: prices,
                        borderColor: 'rgb(75, 192, 192)'
                    }]
                }}
                height={600}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        xAxis: {
                            ticks: {
                                maxTicksLimit: 8                                
                            }
                        }
                    }
                }}
            />
        </div>
    
    );
}


export default CryptoChart;