let img = document.getElementById('logo');
  let webpSrc = 'images/teddyBear.webp';
  let gifSrc = 'images/Mishka.gif';

  img.addEventListener('mouseenter', () => {
        img.src = gifSrc;
  });

  img.addEventListener('mouseleave', () => {
    img.src = webpSrc;
  });