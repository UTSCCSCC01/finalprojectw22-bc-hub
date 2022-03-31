import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const CryptoChart = (props) => {
   
    return (
        <div className="cryptoChart">
            <Line 
                data={{
                    labels: props.dates,
                    datasets: [{
                        label: props.coin,
                        data: props.prices,
                        borderColor: 'rgb(255, 255, 255)'
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
                                color: 'rgb(255, 255, 255)'                             
                            }
                        },
                        y: {
                            ticks: {
                                color: 'rgb(255, 255, 255)'                             
                            }
                        }

                    }
                }}
            />
        </div>
    
    );
}


export default CryptoChart;