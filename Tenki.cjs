

const axios = require("axios");

const API_key = "3f935d39a3922369fbd9bcdcb7910f92";

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