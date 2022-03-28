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
                        label: "BTC Data",
                        data: props.prices,
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