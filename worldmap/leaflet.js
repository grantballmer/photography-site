let mymap = L.map('mapid').setView([17.9757, 102.6331], 4);

//L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiZ3JhbnRiYWxsIiwiYSI6ImNqZ3Fjb3lmMDA2Z3MzMnBobW92cGJrOTUifQ.RtvEgGkoRjjZpDJQaBdogA}', {
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    maxZoom: 18,
//    id: 'mapbox.streets',
//}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/grantball/cjgqcue9i000a2roaegkhd506/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JhbnRiYWxsIiwiYSI6ImNqZ3Fjb3lmMDA2Z3MzMnBobW92cGJrOTUifQ.RtvEgGkoRjjZpDJQaBdogA', {
		maxZoom: 12,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
}).addTo(mymap);

//let myIcon = L.icon({
//	iconSize: [30, 70]
//});

let marker = L.marker([21.1717, 94.8585]).addTo(mymap);

//let popup = L.popup()
//	.setLatLng([21.1717, 94.8585])
//	.setContent("<img src=\"../assets/bagan/mobile/hiding.jpg\">")
//	.maxWidth(60)
//	.maxHeight(45)
//	.openOn(mymap);

marker.bindPopup("<a href=\"https://www.google.com\" target=\"_blank\"><img src=\"../assets/bagan/mobile/hiding.jpg\"></a>"), {
	maxWidth: "125px",
	maxHeight: "125px"
};

//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);