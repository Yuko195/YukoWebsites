window.addEventListener("load", () => {
const preloader = document.getElementById("preloader");
if (preloader) {
setTimeout(() => {
preloader.style.opacity = "0";
}, 2000);
}
});