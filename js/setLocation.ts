var x = document.getElementById("demo");

function getCurrentDeviceLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.textContent = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.textContent = "Latitude: " + position.coords.latitude +
    "; Longitude: " + position.coords.longitude;
}