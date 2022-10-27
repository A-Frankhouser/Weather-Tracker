const currentDateElement = document.querySelector(".currentDate");
const apiKeyId = "417480d7c05aefc18c93459468066af6";
// setInterval(() => {
//     const time = new Date();
//     const month = time.getMonth();
//     const day = time.getDay();
//     const date = time.getDate();

//     currentDateElement.innerHTML = "(" + month + "/" + day + "/" + date + ")";
// }, 1000);

let weather = {
    "apiKey": "417480d7c05aefc18c93459468066af6",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=imperial"
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

fetchFiveDay: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey + "&units=imperial"
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
            console.log(data);
    },


    displayWeather: function(data) {

        // Getting the data values for the current weather
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed} = data.wind;
        const { timezone } = data;
        const { lat } = data.coord;
        const { lon } = data.coord;

        console.log(name, icon, description, temp, humidity, speed, timezone, lat, lon);

        
        // Selecting Elements in HTML
        document.querySelector(".city").innerText = "Weather in " + name;
        // document.querySelector(".currentDate").innerText = timezone;
        document.querySelector(".currentIcon").src = "http://openweathermap.org/img/wn/" + icon +"@4x.png";
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
    weather.search()
});
//----------------------------------------------------------------------------

















// Trying to get the enter button to search Also------------------------------------------
// document.querySelector("#searchbar").addEventListener("keyup", function (event) {
//     if (event.key = "Enter") {
//         weather.search();
//         event.preventDefault()
//     }
// })
//----------------------------------------------------------------------------------------

