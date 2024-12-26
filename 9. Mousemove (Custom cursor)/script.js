let bg = document.querySelector(".bg");
let mover = document.querySelector(".mover");

bg.addEventListener("mousemove", (event) => {
  mover.style.top = `${event.clientY}px`;
  mover.style.left = `${event.clientX}px`;
});
