// key for Open Weather
// APIKey = "417480d7c05aefc18c93459468066af6"
// ------------------------------------------------

let weather = {
    "apiKey": "417480d7c05aefc18c93459468066af6",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=woodstock&appid=417480d7c05aefc18c93459468066af6&units=imperial"
        ).then((response) => response.json())
        .then((data) => console.log(data))
    }
}
