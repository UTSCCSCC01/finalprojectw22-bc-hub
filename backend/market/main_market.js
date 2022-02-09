const express = require('express');
const https = require('https');

const app = express();
const body_parser = require('body-parser');

const crypto_arr = [];

app.use(body_parser.urlencoded({extended: true}));

app.get("/", function(req, res) {

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

      for(let i = 0; i < crypto.data.length; i++){
        crypto_arr.push({
          "id": crypto.data[i].id,
          "name": crypto.data[i].name,
          "symbol": crypto.data[i].symbol,
          "price": crypto.data[i].quote.USD.price,
          "24h": crypto.data[i].quote.USD.percent_change_24h,
          "7d": crypto.data[i].quote.USD.percent_change_7d,
          "30d": crypto.data[i].quote.USD.percent_change_30d,
          "market_cap": crypto.data[i].quote.USD.market_cap,
        })
      }

      console.log(crypto_arr);
      res.send();

    });
  });
});


app.listen(5000, function() {
  console.log("Server is running on port 3000")
});
