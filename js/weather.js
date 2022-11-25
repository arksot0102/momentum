function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = poasition.coords.longitude;
}
function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess);
