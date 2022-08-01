let mapOptions = {
    center:[41.87194, 12.56738],
    zoom:6
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


let locations = [
    {
        "id":1,
        "lat":45.48646,
        "lng":9.20597,
        "src": 'img/Piazza.jpeg',
        "adress": 'Piazza  Luigi  di  Savoia I - Milano',
        "url":'https://goo.gl/maps/PcJ6BUSdZQsdQQF87',
    },
    {
        "id":2,
        "lat":45.52998,
        "lng":9.36663,
        "src": 'img/Togliatti.jpg',
        "adress": 'Via Togliatti, 2 - Milano',
        "url":'https://goo.gl/maps/QNPUT7LWx9YtQWjL6',
    },
    {
        "id":3,
        "lat":45.48053,
        "lng":9.18604,
        "src": 'img/Aprile.jpg',
        "adress": 'Piazza Venticinque Aprile - Milano',
        "url":'https://goo.gl/maps/kFUi2yVqZSqFz9mq6',
    },
    {
        "id":4,
        "lat":44.64785,
        "lng":10.85484,
        "src": 'img/entrata.jpg',
        "adress": 'Via Emilia Ovest 1480 - Modena',
        "url":'https://goo.gl/maps/RRZRJBcHJvKQ4gq46',
    },
    {
        "id":5,
        "lat":44.63461,
        "lng":10.95522,
        "src": 'img/Emilia.jpg',
        "adress": 'Via Emilia Est 981 - Modena',
        "url":'https://goo.gl/maps/8AsMwNdo7uSCjeJN9',
    },
    {
        "id":6,
        "lat":41.1076,
        "lng":16.87901,
        "src": 'img/Orabona.jpg',
        "adress": 'Via Orabona 4 - Bari',
        "url":'https://goo.gl/maps/PH1QhwX1kqynKaxp6',
    },
    {
        "id":7,
        "lat":41.12695,
        "lng":16.87187,
        "src": 'img/ferrarese.jpg',
        "adress": 'Piazza Ferrarese 28 - Bari',
        "url":'https://goo.gl/maps/mQKFreeBRWihQRFt8',
    },
]



var markerClusters = L.markerClusterGroup();

var myIcon = L.icon({
  iconUrl: 'img/pin24.png',
  iconSize: [60, 42],
});
 
for ( var i = 0; i < locations.length; ++i )
{
  var popup = ('<div class="card" style="width: 18rem;"><img src="'+locations[i].src+'" class="card-img-top" alt"place"><h2 class="card-title">'+locations[i].adress+'</h2><a href="' +locations[i].url+'" class=" white btn btn-primary">Portami qui</a></div>');
 
  var m = L.marker( [locations[i].lat, locations[i].lng], {icon: myIcon} )
                  .bindPopup( popup );
 
  markerClusters.addLayer( m );
}
 
map.addLayer( markerClusters );
