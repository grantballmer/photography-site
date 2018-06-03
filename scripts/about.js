const icon = document.querySelector(".fa-bars");
const menu = document.querySelector("ul");

icon.addEventListener("click", () => {
	menu.classList.toggle("flex");
});