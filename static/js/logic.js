// Define the API endpoint URL
let earthquakeAPI = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Make a GET request to fetch earthquake data from the API
d3.json(earthquakeAPI).then(function(data) {
    // Log the fetched data and pass features to createFeatures function
    console.log(data);
    createFeatures(data.features);
});

// Create circular markers with size and color based on magnitude and depth
function createMarker(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: calculateMarkerSize(feature.properties.mag),
        fillColor: determineMarkerColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 0.5,
        opacity: 0.5,
        fillOpacity: 1
    });
}

// Create features with popups for each earthquake
function createFeatures(earthquakeData) {
    function onEachFeature(feature, layer) {
        layer.bindPopup(`
            <h3>Location:</h3> ${feature.properties.place}
            <h3>Magnitude:</h3> ${feature.properties.mag}
            <h3>Depth:</h3> ${feature.geometry.coordinates[2]}
        `);
    }

    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: createMarker
    });

    createMap(earthquakes);
}

// Create the map with base layers and overlay
function createMap(earthquakes) {
    let streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [streetMap, earthquakes]
    });

    let legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend'),
            grades = [-10, 10, 30, 60, 90],
            labels = [],
            legendInfo = "<h5>Magnitude</h5>";

        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + determineMarkerColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }    

        return div;
    };

    legend.addTo(myMap);
}

// Calculate marker size based on earthquake magnitude
function calculateMarkerSize(magnitude) {
    return magnitude * 5;
}

// Determine marker color based on earthquake depth
function determineMarkerColor(depth) {
    return depth > 90 ? '#d73027' :
           depth > 70 ? '#fc8d59' :
           depth > 50 ? '#fee08b' :
           depth > 30 ? '#d9ef8b' :
           depth > 10 ? '#91cf60' :
                        '#1a9850';
}
