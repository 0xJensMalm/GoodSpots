// app.js
import { moveToUserLocation } from "./geolocation.js";
import { customIcon, createCustomMarker } from "./utils.js";
import { map } from "./map.js";

// Add event listener to the locate button
document
  .getElementById("locate-button")
  .addEventListener("click", moveToUserLocation);

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

// Add interactivity to add custom markers on click
map.on("click", function (e) {
  createCustomMarker(e.latlng.lat, e.latlng.lng, map);
});
