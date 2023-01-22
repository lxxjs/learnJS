const API_KEY = "030585c4f05b24b8630a22a7141b4371";

function geoSuccess(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url);
};

function geoError() {

};


navigator.geolocation.getCurrentPosition(geoSuccess, geoError);