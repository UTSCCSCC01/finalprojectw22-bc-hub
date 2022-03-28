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
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    
    );
}


export default CryptoChart;