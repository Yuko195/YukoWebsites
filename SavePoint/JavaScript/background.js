let backgrounds = {
"Doors": "url('images/doors.jpg')",
"Pressure": "url('images/pressure.jpg')",
"BubbleGum": "url('images/bgs.jpg')",
"OtherGames": "url('images/plates.jpg')"
};
document.querySelectorAll("aside button").forEach(button => {
  button.addEventListener("click", () => {
  let gameId = button.dataset.game;
  document.querySelectorAll(".game-content").forEach(block => {
  block.classList.remove("active");
  });
  document.getElementById(gameId).classList.add("active");
  document.body.style.backgroundImage = backgrounds[gameId];
  });
});