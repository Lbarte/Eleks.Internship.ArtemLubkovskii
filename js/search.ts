var latitude = "", longitude = "";

function search() {
    //TODO: set the if statement for checked element
    // property "checked" doesn`t work
    getInputLocation();
    getResult(latitude, longitude);
}

function getResult(latitude, longitude) {
    getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&language=en&key=AIzaSyA-lDzccV2juv39_BrE-sRkPZ-NqaMaWD0");
}

function getJSON(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        parsingJSONForCountryName(JSON.parse(xmlhttp.responseText));
        /*if(checkForCountry) {
            
        } else {
            parcingJSONForResult(JSON.parse(xmlhttp.responseText));
        }*/
    };
}
function parsingJSONForCountryName(arr) {
    //country search
    var country, countryShortName, out="";
    for(var index = 0; index < arr.results.length; index++) {
        for(var adressComponentsIndex = 0; adressComponentsIndex < arr.results[index].address_components.length; adressComponentsIndex++) {
            if(arr.results[index].address_components[adressComponentsIndex].types[0] == "country") {
                country = arr.results[index].address_components[adressComponentsIndex].long_name;
                countryShortName = arr.results[index].address_components[adressComponentsIndex].long_name;
            }
            out += arr.result[index].formatted_address;
        }
    }
    document.getElementById("formatted_address").textContent = out;
    countryOutput(country);
    //capital search
    //getJSON("https://api.geonames.org/countryInfoJSON?&country="+countryShortName+"&username=lbarfo", false);
}
/*function parcingJSONForResult(arr) {
    var capitalResultVariable = arr.geonames[1].capital;
    document.getElementById("capitalResult").textContent = "Capital: " + capitalResultVariable;
}*/
function countryOutput(name) {
    document.getElementById("countryResult").textContent = "Country: " + name;
    console.error(name);
}

function getInputLocation() {
    latitude = document.getElementById("latitudeInput").textContent;
    longitude = document.getElementById("longitudeInput").textContent;
}