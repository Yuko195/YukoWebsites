let img = document.getElementById('logo');
let webpSrc = 'assets/cup.png';
let gifSrc = 'assets/steamCup.gif';
img.addEventListener('mouseenter', () => {
img.src = gifSrc;
});
img.addEventListener('mouseleave', () => {
img.src = webpSrc;
});