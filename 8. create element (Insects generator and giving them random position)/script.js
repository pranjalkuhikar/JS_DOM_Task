let btn = document.querySelector(".btn");
let bg = document.querySelector(".bg");

function random() {
  return Math.floor(Math.random() * 100);
}

btn.addEventListener("click", () => {
  let div = document.createElement("img");
  div.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQnTzPOGEJwewPIN6lu2gTs0TEJv3T-HeYA&s";
  div.style.position = "absolute";
  div.style.top = `${random()}%`;
  div.style.left = `${random()}%`;
  div.style.height = "60px";
  div.style.width = "60px";
  bg.appendChild(div);
  console.log("ABC");
});
