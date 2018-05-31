function View(lat, lon, zoom, markerZoom, koreaZoom, popupWidth) {
	this.lat = lat;
	this.lon = lon;
	this.zoom = zoom;
	this.markerZoom = markerZoom;
	this.koreaZoom = koreaZoom;
	this.popupWidth = popupWidth;
}

let responsiveView;
let desktopView = new View(17.9757, 102.6331, 4, 5.5, 6.5, 225);
let mobileView = new View(15, 101, 2.5, 4, 5, 150);

(window.innerWidth > 1024) ? responsiveView = desktopView : responsiveView = mobileView;

const southWest = L.latLng(-89.98155760646617, -180);
const northEast = L.latLng(89.99346179538875, 180);
const bounds = L.latLngBounds(southWest, northEast);

let mymap = L.map('mapid', {
  zoomControl: false,
  zoomSnap: 0.5,
	maxBounds: bounds,
  maxBoundsViscosity: 1.0
}).setView([responsiveView.lat, responsiveView.lon], responsiveView.zoom);

//set zoom control to right side
L.control.zoom({
     position:'topright'
}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/grantball/cjgqcue9i000a2roaegkhd506/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JhbnRiYWxsIiwiYSI6ImNqZ3Fjb3lmMDA2Z3MzMnBobW92cGJrOTUifQ.RtvEgGkoRjjZpDJQaBdogA', {
		minZoom: 2,
		attribution: 'Map data &copy;' +
				'<a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
}).addTo(mymap);


//korea markers
let seoul = L.marker([37.5665, 126.9780]).addTo(mymap);
seoul.bindPopup(`<a href="./galleries/seoul.html" target="_blank"><img src="assets/maps/thumbnails/gyeongbokgung-palace.jpg" width=${responsiveView.popupWidth}></a>`);

//let danyang = L.marker([36.9845, 128.3655]).addTo(mymap);
//danyang.bindPopup(`<a href="./galleries/korea.html" target="_blank"><img src="assets/maps/thumbnails/danyang-tent.jpg" width=${responsiveView.popupWidth}></a>`);

let boseong = L.marker([34.7715, 127.0799]).addTo(mymap);
boseong.bindPopup(`<a href="./galleries/boseong.html" target="_blank"><img src="assets/maps/thumbnails/boseong-green-tea.jpg" width=${responsiveView.popupWidth}></a>`);

let jinhae = L.marker([35.1330, 128.7100]).addTo(mymap);
jinhae.bindPopup(`<a href="./galleries/jinhae.html" target="_blank"><img src="assets/maps/thumbnails/jinhae-cherry-blossoms.jpg" width=${responsiveView.popupWidth}></a>`);

let seoraksan = L.marker([38.1196, 128.4656]).addTo(mymap);
seoraksan.bindPopup(`<a href="./galleries/seoraksan.html" target="_blank"><img src="assets/maps/thumbnails/seoraksan-park-korea.jpg" width=${responsiveView.popupWidth}></a>`);

//myanmar markers
let bagan = L.marker([21.1717, 94.8585]).addTo(mymap);
bagan.bindPopup(`<a href="./galleries/bagan.html" target="_blank"><img src="assets/maps/thumbnails/bagan-sunrise.jpg" width=${responsiveView.popupWidth}></a>`);

//indonesia markers
let bukitLawang = L.marker([3.5553, 98.1448]).addTo(mymap);
bukitLawang.bindPopup(`<a href="./galleries/sumatra.html" target="_blank"><img src="assets/maps/thumbnails/gunung-leuser-orangutan.jpg" width=${responsiveView.popupWidth}></a>`);

let java = L.marker([-7.9425, 112.9530]).addTo(mymap);
java.bindPopup(`<a href="./galleries/java.html" target="_blank"><img src="assets/maps/thumbnails/bromo-sunrise.jpg" width=${responsiveView.popupWidth}></a>`);

let bali = L.marker([-8.5069, 115.2625]).addTo(mymap);
bali.bindPopup(`<a href="./galleries/bali.html" target="_blank"><img src="assets/maps/thumbnails/bali-legong-dancer.jpg" width=${responsiveView.popupWidth}></a>`);

let komodo = L.marker([-8.4538, 119.8728]).addTo(mymap);
komodo.bindPopup(`<a href="./galleries/komodo.html" target="_blank"><img src="assets/maps/thumbnails/komodo-dragon.jpg" width=${responsiveView.popupWidth}></a>`);

//india markers

//let delhi = L.marker([28.7041, 77.1025]).addTo(mymap);
//delhi.bindPopup(`<a href="#" target="_blank"><img src="assets/maps/thumbnails/delhi.jpg" width=${responsiveView.popupWidth}></a>`);

let agra = L.marker([27.1767, 78.0081]).addTo(mymap);
agra.bindPopup(`<a href="./galleries/agra.html" target="_blank"><img src="assets/maps/thumbnails/agra-taj-mahal.jpg" width=${responsiveView.popupWidth}></a>`);

let bharatpur = L.marker([27.1593, 77.5232]).addTo(mymap);
bharatpur.bindPopup(`<a href="./galleries/bharatpur.html" target="_blank"><img src="assets/maps/thumbnails/bharatpur-sunrays.jpg" width=${responsiveView.popupWidth}></a>`);

let ranthambore = L.marker([26.0173, 76.5026]).addTo(mymap);
ranthambore.bindPopup(`<a href="./galleries/ranthambore.html" target="_blank"><img src="assets/maps/thumbnails/ranthambore-park-deer.jpg" width=${responsiveView.popupWidth}></a>`);

let bundi = L.marker([25.4305, 75.6499]).addTo(mymap);
bundi.bindPopup(`<a href="./galleries/bundi.html" target="_blank"><img src="assets/maps/thumbnails/bundi-fort.jpg" width=${responsiveView.popupWidth}></a>`);

let pushkar = L.marker([26.4897, 74.5511]).addTo(mymap);
pushkar.bindPopup(`<a href="./galleries/pushkar.html" target="_blank"><img src="assets/maps/thumbnails/pushkar-india-man.jpg" width=${responsiveView.popupWidth}></a>`);

let jaipur = L.marker([26.9124, 75.7873]).addTo(mymap);
jaipur.bindPopup(`<a href="./galleries/jaipur.html" target="_blank"><img src="assets/maps/thumbnails/jaipur.jpg" width=${responsiveView.popupWidth}></a>`);

let jodhpur = L.marker([26.2389, 73.0243]).addTo(mymap);
jodhpur.bindPopup(`<a href="./galleries/jodhpur.html" target="_blank"><img src="assets/maps/thumbnails/watchtower.jpg" width=${responsiveView.popupWidth}></a>`);

let varanasi = L.marker([25.3176, 82.9739]).addTo(mymap);
varanasi.bindPopup(`<a href="./galleries/varanasi.html" target="_blank"><img src="assets/maps/thumbnails/varanasi-evening.jpg" width=${responsiveView.popupWidth}></a>`);

let amritsar = L.marker([31.6340, 74.8723]).addTo(mymap);
amritsar.bindPopup(`<a href="./galleries/amritsar.html" target="_blank"><img src="assets/maps/thumbnails/amritsar-golden-temple.jpg" width=${responsiveView.popupWidth}></a>`);

let kaziranga = L.marker([26.5775, 93.1711]).addTo(mymap);
kaziranga.bindPopup(`<a href="./galleries/kaziranga.html" target="_blank"><img src="assets/maps/thumbnails/kaziranga-rhino.jpg" width=${responsiveView.popupWidth}></a>`);

const markers = [seoul, boseong, jinhae, seoraksan, bagan, bukitLawang, java, bali, komodo, agra, bharatpur, ranthambore, bundi, jaipur, pushkar, jodhpur, varanasi, amritsar, kaziranga];

markers.forEach(function(marker, index) {
  marker.addEventListener("mouseover", () => {
    let popup = marker.getPopup();
    marker.openPopup();
  });
});

//sidebar control
const coordinates = [[21.1717, 94.8585], [27.1593, 77.5232], [-3.6215, 108.4776], [35.5665, 126.9780]];
const sidebarBoxes = document.querySelectorAll(".countries ul li");
const sidebarCities = document.querySelectorAll(".cities");
let active;


sidebarBoxes.forEach(function(box, index)	{
	box.addEventListener("click", function() {
		
//		//set view to clicked country and change zoom if Korea
//		let zoom;
//		(index === 3) ? zoom = 6.5 : zoom = 5.5;
//		mymap.setView([coordinates[index][0], coordinates[index][1]], zoom);
		
		//check to see if same box clicked again or if new box clicked
		if (this === active) {
			sidebarCities[index].classList.toggle("flip");
		} else {
			sidebarCities.forEach((city, index) => {
				city.classList.remove("flip");
			});
			sidebarCities[index].classList.add("flip");
			let zoom;
			(index === 3) ? zoom = responsiveView.koreaZoom : zoom = responsiveView.markerZoom;
			mymap.setView([coordinates[index][0], coordinates[index][1]], zoom);
		}
		
		//set active element to currently clicked element
		active = this;
	});
});


//city sidebar control

//indian city control 
const cities = document.querySelectorAll(".cities li");
cities.forEach((city, index) => {
	city.addEventListener("click", () => {
		let place = city.textContent.replace(" ", "");
		eval(place).togglePopup();
	})
})

