var initBikes = function() {
    // BIKE STUFF
    var url = "https://api.tfl.gov.uk/BikePoint?app_id=cc48b9df&app_key=c971b37f601d2e9a85bab35ab46125b5";
    $.getJSON(url, function(bikePoints) {
        initMap(bikePoints);
    });
}

function initMap(bikePoints) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 51.529163, lng: -0.10997 }
    });

    setMarkers(map, bikePoints);
}

// var beaches = [
//     ['Bondi Beach', -33.890542, 151.274856, 4],
//     ['Coogee Beach', -33.923036, 151.259052, 5],
//     ['Cronulla Beach', -34.028249, 151.157507, 3],
//     ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//     ['Maroubra Beach', -33.950198, 151.259302, 1]
// ];

var beaches = [];


function setMarkers(map, bikePoints) {
    console.log(bikePoints);
    var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        size: new google.maps.Size(20, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };

    for (var i = 0; i < bikePoints.length; i++) {
        var a = [bikePoints[i].commonName,bikePoints[i].lat,bikePoints[i].lon]
        beaches.push(a);
        // console.log("Lat: " + bikePoints[i].lat + " - Lon:" + bikePoints[i].lon);
    }
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
        });
    }
}

// MAPS STUFF
// const googleMapsKey = "AIzaSyC5Z8MMXeK25xmnNcmMmYMzDglt0Jw9MzM";
// var mapsURL = "https://maps.googleapis.com/maps/api/js?key=" + googleMapsKey + "&callback=initMap";

// function markerMap(bikePoints) {
//     for (var i = 0; i < bikePoints.length; i++) {
//         console.log("Lat: " + bikePoints[i].lat + " - Lon:" + bikePoints[i].lon);

//     }

//     var myLatLng = { lat: -25.363, lng: 131.044 };

//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: myLatLng
//     });

//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//     });
// };