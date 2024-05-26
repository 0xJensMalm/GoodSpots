// map.js

// Initialize the map without setting the view initially
var map = L.map("map");

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Function to initialize the map at a given location
function initializeMap(lat, lng) {
  console.log(`Initializing map at latitude: ${lat}, longitude: ${lng}`);
  map.setView([lat, lng], 13);

  // Add a marker at the user's location
  var marker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup("You are here.")
    .openPopup();

  // Add a sample trail (polyline)
  var latlngs = [
    [lat, lng],
    [lat + 0.005, lng - 0.005],
    [lat + 0.01, lng - 0.01],
  ];
  var polyline = L.polyline(latlngs, { color: "blue" }).addTo(map);

  // Add interactivity to add markers on click
  map.on("click", function (e) {
    var newMarker = L.marker(e.latlng)
      .addTo(map)
      .bindPopup("You clicked the map at " + e.latlng.toString())
      .openPopup();
  });
}

// Export the initializeMap function
export { initializeMap, map };
