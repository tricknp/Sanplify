var latitude;
var longitude;

function getLocation() {
    if (navigator.geolocation) {
        latitude = navigator.geolocation.getCurrentPosition().coords.latitude;
        longite = navigator.geolocation.getCurrentPosition().coords.longitude;
    } else {
        alert("O seu navegador não suporta Geolocalização.");
    }
}