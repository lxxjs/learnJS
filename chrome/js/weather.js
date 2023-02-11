const API_KEY = "YOUR_API_KEY";

function geoSuccess(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            const temperature = data.main.temp;
            const description =  data.weather[0].main;
            weather.innerText = temperature + '°C ' + description;
        });
    //console.log(res);
};

function geoError() {

};


navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
