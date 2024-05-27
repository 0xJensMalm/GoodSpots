// app.js
import { moveToUserLocation } from "./geolocation.js";
import { customIcon, createCustomMarker } from "./utils.js";
import { map, initializeMap } from "./map.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map at a default location (if needed)
  console.log("Initializing map with default location.");
  initializeMap(51.505, -0.09);

  // Add initial marker and polyline to the map
  console.log("Adding initial marker and polyline to the map");
  var initialMarker = L.marker([51.5, -0.09], { icon: customIcon })
    .addTo(map)
    .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    .openPopup();

  var latlngs = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  var polyline = L.polyline(latlngs, { color: "blue" }).addTo(map);

  // Add geocoder control to the map
  var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false,
  })
    .on("markgeocode", function (e) {
      var center = e.geocode.center;
      map.setView(center, map.getZoom());
      if (currentMarker) {
        map.removeLayer(currentMarker);
      }
      currentMarker = L.marker(center, { icon: customIcon })
        .addTo(map)
        .bindPopup(e.geocode.name)
        .openPopup();
    })
    .addTo(map);

  // Add event listener to the locate button
  document
    .getElementById("locate-button")
    .addEventListener("click", function () {
      console.log("Locate Me button clicked");
      moveToUserLocation();
    });

  // Add event listener to the search button
  document
    .getElementById("search-button")
    .addEventListener("click", function () {
      console.log("Search button clicked");
      var searchBox = document.querySelector(".leaflet-control-geocoder");
      if (searchBox) {
        searchBox.querySelector("input").focus();
      }
    });

  // Add interactivity to add custom markers on click
  map.on("click", function (e) {
    if (currentMarker) {
      map.removeLayer(currentMarker); // Remove the existing marker
    }
    currentMarker = createCustomMarker(e.latlng.lat, e.latlng.lng, map);
  });
});
