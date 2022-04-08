import express from "express";
import https from "https";
import body_parser from "body-parser";

// Coinbase: https://api.pro.coinbase.com or https://api.exchange.coinbase.com

const router = express.Router();

//const barSize = 86400;
const MS_PER_MINUTE = 60000;

//const rounded = new Date(date - MS_PER_MINUTE*60);
// Possible times: 25 hours, 3 days, 12 days, 2.5 months, 9 months

router.use(body_parser.urlencoded({extended: true}));

router.get("/:symbol?/:time", function(req, res) {

    // Time is span between data point in ms.
    let barSize = req.params.time;
    const date =  new Date();
    const date1 = new Date(date - barSize*5*MS_PER_MINUTE);

    const timeEnd = date.toISOString();
    const timeStart = date1.toISOString();

    const params = {
        "start": timeStart,
        "end": timeEnd,
        "granularity": barSize.toString()
    };
    
    const apiUrl = '/products/' + req.params.symbol + '-USD' + '/candles'
    const url = apiUrl + '?' + "start=" + params["start"] + "&end=" + params["end"] + "&granularity=" + params["granularity"];
    
    const options = {
        hostname: 'api.pro.coinbase.com',
        path: url,
        method: 'GET',
        agent: false,
        headers: {
            'User-Agent': 'Mozilla/5.0',
        },
    };
    console.log(url);
    https.get(options, function(response) {
        
        let btcData = "";

        response.on("data", function(data){
            btcData += data;
        });

        response.on("end", function(data) {
            const btc = JSON.parse(btcData);
            const chart_data = [];

            for (var i = 0; i < btc.length; i++){
                const temp_date = new Date(btc[i][0]*1000)
                let format_date = temp_date.toISOString().substring(0,10);
                if (params["granularity"] == "300"){
                    format_date = temp_date.toISOString().substring(11, 16);
                }
                //onsole.log(format_date);
                chart_data.push([format_date, btc[i][1]]);
            }
            res.send(chart_data);
        });
    });
});

export default router;