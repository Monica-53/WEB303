/*
    Assignment #4
    {Monica Eda
}
*/


    // your code here*/

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    $("#content").html("latitude: " + position.coords.latitude +
      "<br>longitude: " + position.coords.longitude);


  });

  // Check if monica-data is in local storage
  const monicaData = getItem('monica-data');
  if (monicaData) {
    console.log('There is Data');
    // Display Welcome back
    $('header').html('<h1>Welcome back</h1>');
  } else {
    console.log('No data');
    // Display Welcome for the first time
    $('header').html('<h1>Welcome for the first time</h1>')
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    // What you want to do after you get position
    const location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }
    // Store location data to localstorage
    setItem('monica-data', location);

    // Calculate Distance
    const distance = calcDistanceBetweenPoints(monicaData.latitude, monicaData.longitude, position.coords.latitude, position.coords.longitude);
    console.log('distance ', distance)
    $('header').append(`<h5>Distance ${distance}</h5>`)
  });


}


function setItem(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function getItem(key) {
  const item = localStorage.getItem(key);
  if (item == 'undefined') return undefined;
  return JSON.parse(item);
}

function isLocalStorageAvailable() {
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}


// DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
// function to calculate the distance in metres between two lat/long pairs on Earth
// Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
// Aren't those cool variable names? Yah gotta love JavaScript
function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
  var toRadians = function (num) {
    return num * Math.PI / 180;
  }
  var R = 6371000; // radius of Earth in metres
  var φ1 = toRadians(lat1);
  var φ2 = toRadians(lat2);
  var Δφ = toRadians(lat2 - lat1);
  var Δλ = toRadians(lon2 - lon1);

  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return (R * c);
}



