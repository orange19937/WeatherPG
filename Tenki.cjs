

const axios = require("axios");

const API_key = "";

const CITY = "Osaka";


async function Weather(){


try{

const respons = await axios.get(

//``バッククオートは埋め込み処理をしてくれる。
//$で埋め込み指定ができる。
`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_key}&lang=ja&units=metric `


);

const data = respons.data;

console.log(respons.data);




}
//try







catch(erro)
{

console.log("エラーが発生しました。");

if(erro.respons)
{

 console.log(erro.response.data);

}




}
//catch





}//Weather


Weather();
