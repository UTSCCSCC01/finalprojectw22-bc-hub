import express from "express";
import https from "https";
import body_parser from "body-parser";

const router = express.Router();
//dconst body_parser = require('body-parser');


router.use(body_parser.urlencoded({extended: true}));

const supportedCrypto = ['BTC', 'ETH', 'USDT', 'XRP', 'ADA', 'SOL', 'AVAX', 'DOT', 'DOGE', 'UST', 'SHIB', 'MATIC', 'WBTC', 'CRO', 'DAI',
                         'LTC', 'ATOM', 'LINK', 'UNI', 'BCH', 'ETC', 'ALGO', 'XLM', 'MANA', 'ICP', 'AXS', 'APE', 'XTZ', 'EOS', 'ZEC',
                         'AAVE', 'GRT', 'MKR', 'GALA', 'STX', 'QNT', 'CHZ', 'LRC', 'ENJ', 'DASH', 'BAT', 'OKB', 'CRV', 'MINA', 'AMP', 
                         'IOTX', 'COMP', 'YFI'];

router.get("/main", function(req, res) {

  const api_key = '9a842280-701b-4651-890d-b0aeee1f199b';
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=" + api_key;

  https.get(url, function(response){

    console.log(response.statusCode);
    let coinData = '';

    response.on("data", function(data){
      coinData += data;
    });
    response.on("end", function(data) {
      const crypto = JSON.parse(coinData);
      const supportedData = [];
      for (var i = 0; i < crypto.data.length; i++){
        if (supportedCrypto.includes(crypto.data[i].symbol)){
          supportedData.push(crypto.data[i])
        }
      }
      res.send(supportedData);

    });
  });
});


export default router;
