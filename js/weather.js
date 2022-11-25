const API_KEY = "7ebd066ccf9c34d0aa00765230372cf4";
function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cityCon = document.querySelector("#weather span:first-child");
      const weatherCon = document.querySelector("#weather span:nth-child(2)");
      const tempCon = document.querySelector("#weather span:nth-child(3)");
      const name = data.name;
      const weather = data.weather[0].main;
      const temperature = data.main.temp;
      cityCon.innerText = name;
      weatherCon.innerText = weather;
      tempCon.innerText = `${Math.round(temperature)}ºC`;
    });
}
function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess);
