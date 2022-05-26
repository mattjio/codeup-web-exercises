"use strict"

const URL = "https://api.openweathermap.org/data/2.5/forecast";

$.get(URL, {
    APPID : OPEN_WEATHER_KEY,
    q: "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);
    $(".info").append(data.list[0])
})

