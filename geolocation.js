// geolocation.js
import { initializeMap } from "./map.js";

// Function to handle geolocation success
function onLocationFound(e) {
  var lat = e.coords.latitude;
  var lng = e.coords.longitude;
  console.log(`Location found: latitude ${lat}, longitude ${lng}`);
  initializeMap(lat, lng);
  document.getElementById("loading-spinner").style.display = "none";
}

// Function to handle geolocation error
function onLocationError(e) {
  console.error(`Geolocation error: ${e.message}`);
  alert(`Geolocation error: ${e.message}`);
  document.getElementById("loading-spinner").style.display = "none";
}

// Function to move map to current location when button is clicked
function moveToUserLocation() {
  if (navigator.geolocation) {
    console.log("Requesting current location...");
    document.getElementById("loading-spinner").style.display = "block";
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(
          `Moving to user location: latitude ${lat}, longitude ${lng}`
        );
        initializeMap(lat, lng);
        document.getElementById("loading-spinner").style.display = "none";
      },
      onLocationError,
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    alert("Geolocation is not supported by this browser.");
  }
}

// Request the user's location on page load
if (navigator.geolocation) {
  console.log("Requesting initial location...");
  navigator.geolocation.getCurrentPosition(onLocationFound, onLocationError, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  });
} else {
  console.error("Geolocation is not supported by this browser.");
  alert("Geolocation is not supported by this browser.");
}

// Export the moveToUserLocation function
export { moveToUserLocation };
