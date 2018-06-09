var map;

function initMap() {
    var uluru = {
        lat: 41.311194,
        lng: 69.279736
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 41.311194,
            lng: 69.279736
        },
        zoom: 17
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}