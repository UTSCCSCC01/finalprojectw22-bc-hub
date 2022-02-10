import express from "express";
import https from "https";
import body_parser from "body-parser";

const router = express.Router();
//dconst body_parser = require('body-parser');


router.use(body_parser.urlencoded({extended: true}));

const crypto_arr = [];

router.get("/main/:symbol?", function(req, res) {

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
      if (!req.params.symbol){
        res.send(crypto);
      } 
      else {
        for (var i = 0; i < crypto.data.length; i++){
          if (req.params.symbol == crypto.data[i].symbol){
            res.send(crypto.data[i])
          }
        }
      }

    });
  });
});


export default router;
