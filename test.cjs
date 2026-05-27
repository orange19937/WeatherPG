
/*
require レクアイア  必要とする　要求する
*/

// axiosライブラリを読み込む
/*
requireは、モジュール化されたJSファイル
を[Node.jsから]効率よく読み込んで利用できるようにしてくれます。

https://www.sejuku.net/blog/77966これにモジュールの事や、リクアイアー
の事についてまとめられた文があります。

*/
const axios = require("axios");

// OpenWeatherMapのAPIキー
const API_KEY = "";

// 天気を取得したい都市
//主要都市を求めてるため、北海道ではなく札幌
const CITY = "Osaka";




// 非同期関数 await以下、下は一旦飛ばされる。それよりも上は普通に実行。
async function getWeather() {

    try {
        //レスポンス　応答
        // APIへアクセス 情報の取得
        const response = await axios.get(



        /*
     公式ドキュメントに、
      https://api.openweathermap.org/data/2.5/weather?lat=
      {lat}&lon={lon}&appid={API key}

     と書かれています。
     https://openweathermap.org/api/
     current?collection=current_forecast

     */
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ja`
        );

        // APIから返ってきたデータ本体
        /*
        帰ってきたデータはただの文字列で、プロパティを使
        うdata.main.temp;は使えない。そのため、変換が必要になる。
        その変換をパースといい、axiosのresponse.data;は自動的にパース
        をしてくれる。
        */
        const data = response.data;

        // 必要な情報を取り出す
        const weather = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;


        const icon = data.weather[0].icon;
        const url = `https://openweathermap.org/payload/api/media/file/${icon}@2x.png`;


        // 表示
        console.log("都市:", CITY);
        console.log("天気:", weather);
        console.log("気温:", temp + "℃");
        console.log("湿度:", humidity + "%");
        console.log(url);

    } catch (error) {

        // エラー時
        console.log("エラーが発生しました");

        // APIからエラー内容が返っている場合
        if (error.response) {
            console.log(error.response.data);
        }
    }
}//function

// 関数実行
getWeather();

//OpenWeatherMap API
//node C:\Users\2260006\Documents\天気プログラム\PgTenki\Tenki.cjs
//path取得はファイル右クリックからpathのコピーからするべき。
