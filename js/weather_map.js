"use strict"

const URL = "https://api.openweathermap.org/data/2.5/forecast";

$.get(URL, {
    APPID : OPEN_WEATHER_KEY,
    q: "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);
    console.log(data.city.name)
    console.log(data.list[0].main.temp)
    console.log(data.list[0].weather[0].description)
    document.getElementById('description').innerHTML = data.list[0].weather[0].description;
    document.getElementById('temp').innerHTML = data.list[0].main.temp;
    document.getElementById('location').innerHTML = data.city.name;
})

