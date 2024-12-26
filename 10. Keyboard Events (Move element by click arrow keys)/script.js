let img = document.querySelector("img");
let count = 0;
document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "ArrowUp") {
    img.style.top = `${count--}%`;
  } else if (event.key === "ArrowDown") {
    img.style.top = `${count++}%`;
  } else if (event.key === "ArrowRight") {
    img.style.left = `${count++}%`;
  } else if (event.key === "ArrowLeft") {
    img.style.left = `${count--}%`;
  }
});
