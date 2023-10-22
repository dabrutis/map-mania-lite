// Notes relating to differences from other tutorials:
// 1 - Renamed "Map, Map, Map" to "myMapID, gMap, map"
// 2 - Modified "bounds-changed" to "idle"

var gMap;

// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file. 
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    // Add a marker for Canoe Bay, WI    
    var marker = new google.maps.Marker({position:{lat:45.3306,lng:-91.4918}, map:gMap});

    // Add a second marking with a custom icon, an Info window, and a listener.
    var marker2 = new google.maps.Marker({position:{lat:36.3932,lng:25.4615}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Santorini, Greece'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });
}

google.maps.event.addListener(gMap, "idle", function() {
    updateGame()
});

function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:45.3306,lng:-91.4918})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function initApplication() {
    console.log("Map Mania Lite Starting");
}