

let weather = {
    "apiKey": "417480d7c05aefc18c93459468066af6",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=imperial"
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed} = data.wind;
        const { timezone } = data;
        console.log(name, icon, description, temp, humidity, speed, timezone);
        document.querySelector(".city").innerText = "Weather in " + name;
        // document.querySelector(".currentDate").innerText = timezone;
        document.querySelector(".currentIcon").src = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".current-temp").innerText = temp + " ℉";
        document.querySelector(".current-wind").innerText = speed + " mph";
        document.querySelector(".current-humidity").innerText = humidity + "%";
    },

    // Gets the text input from the search bar----------------------------
    search: function () {
        this.fetchWeather(document.querySelector("#searchbar").value);
    }
    //--------------------------------------------------------------------
};

// Event Listener for the search button---------------------------------------
document.querySelector("#searchbttn").addEventListener("click", function () {
    weather.search();
//----------------------------------------------------------------------------
});
