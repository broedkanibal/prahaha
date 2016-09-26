var initBikes = function() {
    var url     = 'https://api.tfl.gov.uk/BikePoint?app_id=cc48b9df&app_key=c971b37f601d2e9a85bab35ab46125b5';
    var failMsg = 'Problems connecting to TFL';
    //create jQuery ajax call and handle response
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json"
    })
    .done(function(bikePoints) {
      // console.log(bikePoints);
      initMap(bikePoints);
    })
    .fail(function() {
      alert('Problems connecting to TFL');
    });
};
function initMap(bikePoints) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 51.529163, lng: -0.10997 }
    });
    setMarkers(map, bikePoints);
};
var bicycles = [];
function setMarkers(map, bikePoints) {
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
    //loop on 'bikePoints' object and create bicycles array
    for (i in bikePoints) {
        var a = [bikePoints[i].commonName,bikePoints[i].lat,bikePoints[i].lon]
        bicycles.push(a);
    }
    for (var i = 0; i < bicycles.length; i++) {
        var beach = bicycles[i];
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
