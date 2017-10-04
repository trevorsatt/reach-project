var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/e069d13c9432ad2f/conditions/q/CA/Los_angeles.json", false);
weather.send(null);

var r = JSON.parse(weather.response);

var dis = "Current location: " + r.current_observation.display_location.full + "  <p>";
var temp = r.current_observation.temperature_string+ "  <p>";
var wind = r.current_observation.wind_string+ "  <p>";

function getWeather(id,res) {
  document.getElementById(id).innerHTML=res;
}
getWeather("weather",dis);
getWeather("temp",temp);
getWeather("wind",wind);
