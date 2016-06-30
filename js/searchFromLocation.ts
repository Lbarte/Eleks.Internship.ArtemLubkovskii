function getCountry() {
    console.error("getCountryFrom");
    getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyA-lDzccV2juv39_BrE-sRkPZ-NqaMaWD0");
}
function getJSON(url) {
    console.error("gettingJSON");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        console.error("state are ready");
        var myArr = JSON.parse(xmlhttp.responseText);
        countryOutput(myFunction(myArr));
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}
function myFunction(arr) {
    console.error("reading parced JSON");
    var out = "";
    var i;
    for(i = 0; i < arr.results.length; i++) {
        console.error("reading results");
        for(var index = 0; index < arr.results[i].address_components.length; index++) {
            console.error("reading address components");
            if(arr.results[i].address_components[index].types[0] == "country") {
                console.error("YEAH");
                return arr.results[i].address_components[index].short_name;
            }
        }
    }
}
function countryOutput(name) {
    document.getElementById("resultTextarea").textContent = "Country: " + name;
}