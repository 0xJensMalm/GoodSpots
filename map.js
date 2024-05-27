// map.js

// Initialize the map without setting the view initially
var map = L.map("map");
var currentMarker = null; // Variable to keep track of the current marker

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Function to initialize the map at a given location
function initializeMap(lat, lng) {
  console.log(`Initializing map at latitude: ${lat}, longitude: ${lng}`);
  map.setView([lat, lng], 13);

  // Add a marker at the user's location
  if (currentMarker) {
    map.removeLayer(currentMarker);
  }
  currentMarker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup("You are here.")
    .openPopup();
}

// Add interactivity to add markers on click
map.on("click", function (e) {
  if (currentMarker) {
    map.removeLayer(currentMarker); // Remove the existing marker
  }
  currentMarker = L.marker(e.latlng)
    .addTo(map)
    .bindPopup("You clicked the map at " + e.latlng.toString())
    .openPopup();
});

// Export the initializeMap function and map
export { initializeMap, map };
