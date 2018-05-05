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

let mymap = L.map('mapid', {
  zoomControl: false,
  zoomSnap: 0.5
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
seoul.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/gyeongbokgung.jpg" width=${responsiveView.popupWidth}></a>`);

let danyang = L.marker([36.9845, 128.3655]).addTo(mymap);
danyang.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/danyang-tent.jpg" width=${responsiveView.popupWidth}></a>`);

let boseong = L.marker([34.7715, 127.0799]).addTo(mymap);
boseong.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/boseong-field.jpg" width=${responsiveView.popupWidth}></a>`);

let seoraksan = L.marker([38.1196, 128.4656]).addTo(mymap);
seoraksan.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/seoraksan.jpg" width=${responsiveView.popupWidth}></a>`);

//myanmar markers
let bagan = L.marker([21.1717, 94.8585]).addTo(mymap);
bagan.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/sunrise.jpg" width=${responsiveView.popupWidth}></a>`);

//indonesia markers
let bukitLawang = L.marker([3.5553, 98.1448]).addTo(mymap);
bukitLawang.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/orangutan.jpg" width=${responsiveView.popupWidth}></a>`);

let java = L.marker([-7.9425, 112.9530]).addTo(mymap);
java.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/bromo_sunrise.jpg" width=${responsiveView.popupWidth}></a>`);

let bali = L.marker([-8.5069, 115.2625]).addTo(mymap);
bali.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/bali-dancer.jpg" width=${responsiveView.popupWidth}></a>`);

let komodo = L.marker([-8.4538, 119.8728]).addTo(mymap);
komodo.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/komodo_dragon.jpg" width=${responsiveView.popupWidth}></a>`);

//india markers

let delhi = L.marker([28.7041, 77.1025]).addTo(mymap);
delhi.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/delhi.jpg" width=${responsiveView.popupWidth}></a>`);

let agra = L.marker([27.1767, 78.0081]).addTo(mymap);
agra.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/agra-taj.jpg" width=${responsiveView.popupWidth}></a>`);

let bharatpur = L.marker([27.1593, 77.5232]).addTo(mymap);


let ranthambore = L.marker([26.0173, 76.5026]).addTo(mymap);
ranthambore.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/deer.jpg" width=${responsiveView.popupWidth}></a>`);

let bundi = L.marker([25.4305, 75.6499]).addTo(mymap);
bundi.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/bundi.jpg" width=${responsiveView.popupWidth}></a>`);

let pushkar = L.marker([26.4897, 74.5511]).addTo(mymap);
pushkar.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/man.jpg" width=${responsiveView.popupWidth}></a>`);

let jaipur = L.marker([26.9124, 75.7873]).addTo(mymap);
jaipur.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/jaipur.jpg" width=${responsiveView.popupWidth}></a>`);

let jodhpur = L.marker([26.2389, 73.0243]).addTo(mymap);
jodhpur.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/watchtower.jpg" width=${responsiveView.popupWidth}></a>`);

let varanasi = L.marker([25.3176, 82.9739]).addTo(mymap);
varanasi.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/varanasi-evening.jpg" width=${responsiveView.popupWidth}></a>`);

let amritsar = L.marker([31.6340, 74.8723]).addTo(mymap);
amritsar.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/amritsar.jpg" width=${responsiveView.popupWidth}></a>`);

let kaziranga = L.marker([26.5775, 93.1711]).addTo(mymap);
kaziranga.bindPopup(`<a href="https://www.google.com" target="_blank"><img src="assets/thumbnails/kaziranga-rhino.jpg" width=${responsiveView.popupWidth}></a>`);

const markers = [seoul, danyang, boseong, seoraksan, bagan, bukitLawang, java, bali, komodo, delhi, agra, bharatpur, ranthambore, bundi, jaipur, pushkar, jodhpur, varanasi, amritsar, kaziranga];

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
		eval(place).openPopup();
	})
})

