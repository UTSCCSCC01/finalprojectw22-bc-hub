import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState } from 'react';

const CryptoChart = (props) => {
   
    const [dates, setDates] = useState(props.dates);
    const [prices, setPrices] = useState(props.prices);
    return (
        <div className="shadow-lg " style={{backgroundColor:'RGB(255, 255, 255)', marginTop: 110}}>
            <Line 
                data={{
                    labels: dates,
                    datasets: [{
                        label: props.coin,
                        data: props.prices,
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
                            }
                        },
                        y: {
                            ticks: {
                                color: 'black'                             
                            }
                        }

                    }
                }}
            />
        </div>
    
    );
}


export default CryptoChart;