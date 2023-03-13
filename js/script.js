const rates = {};

const input = document.querySelector('#input');
const resultUSD = document.querySelector('#input-result__USD');
const resultEUR = document.querySelector('#input-result__EUR');
const resultAED = document.querySelector('#input-result__AED');
const resultCNY = document.querySelector('#input-result__CNY');
const resultGBP = document.querySelector('#input-result__GBP');
const select = document.querySelector('#selectCustom');

const cleanInput = () => {
    var getInput = document.getElementById("input");
    getInput.value = '';                      
  }



getCurrencies();

async function getCurrencies () {

    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');

    const data = await response.json();

    const result = await data;

    console.log(result);

    rates.AED = result.Valute.AED;
    rates.USD = result.Valute.USD;
    rates.GBP = result.Valute.GBP;
    rates.EUR = result.Valute.EUR;
    rates.CNY = result.Valute.CNY;
    rates.GBP = result.Valute.GBP;

    console.log(rates);
}


    input.oninput = function() {
        console.log('change');
        resultUSD.value = (parseFloat(input.value) / rates.USD.Value).toFixed(2);
        resultEUR.value = (parseFloat(input.value) / rates.EUR.Value).toFixed(2);
        resultAED.value = (parseFloat(input.value) / rates.AED.Value).toFixed(2);
        resultCNY.value = (parseFloat(input.value) / rates.CNY.Value).toFixed(2);
        resultGBP.value = (parseFloat(input.value) / rates.GBP.Value).toFixed(2);
    }

   

