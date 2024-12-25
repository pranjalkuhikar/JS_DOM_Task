let btn = document.querySelector("button");
let box = document.querySelector(".box");

let randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

btn.addEventListener("click", () => {
  box.style.backgroundColor = randomColor();
});
