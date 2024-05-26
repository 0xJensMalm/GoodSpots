// utils.js

// Define custom icon
var customIcon = L.icon({
  iconUrl: "path/to/your/custom-icon.png",
  iconSize: [38, 38], // size of the icon
  iconAnchor: [22, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

// Function to create a custom marker
function createCustomMarker(lat, lng, map) {
  console.log(`Creating custom marker at latitude: ${lat}, longitude: ${lng}`);
  var customMarker = L.marker([lat, lng], { icon: customIcon })
    .addTo(map)
    .bindPopup("This is a custom marker.")
    .openPopup();

  return customMarker;
}

// Export the customIcon and createCustomMarker function
export { customIcon, createCustomMarker };
