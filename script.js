const makeTiles = (selector) => {
  const grid = document.querySelector(selector);
  for (let i = 0; i < 9; i++) {
    const tile = document.createElement("div");
    tile.style.setProperty("--i", i);
    grid.appendChild(tile);
  }
};

[".ripple-grid", ".snake-grid", ".flip-grid", ".bounce-grid", ".tilt-grid"].forEach(makeTiles);

const tiltGrid = document.querySelector(".tilt-grid");
const tiles = [...tiltGrid.children];

tiltGrid.addEventListener("pointermove", (event) => {
  const bounds = tiltGrid.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;

  tiles.forEach((tile, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const dx = col - 1 - x;
    const dy = row - 1 - y;
    tile.style.transform = `rotateX(${-dy * 22}deg) rotateY(${dx * 22}deg) translateZ(${Math.max(0, 12 - Math.hypot(dx, dy) * 5)}px)`;
  });
});

tiltGrid.addEventListener("pointerleave", () => {
  tiles.forEach((tile) => {
    tile.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  });
});
