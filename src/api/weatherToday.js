export async function getWeather(cityName) {
  const response =
    await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Ccurrent&key=YYXNHEGG85LVFHTTRMTML7AGY&options=beta&contentType=json`);
  const weather = await response.json();
  console.log(weather);
}
