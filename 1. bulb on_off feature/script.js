let btn = document.querySelector(".toggle");
let bg = document.querySelector(".bg");
let flag = 0;
btn.addEventListener("click", () => {
  if (flag === 0) {
    bg.style.backgroundColor = "#000";
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#000";
    flag = 1;
  } else {
    bg.style.backgroundColor = "#fff";
    btn.style.backgroundColor = "#000";
    btn.style.color = "#fff";
    flag = 0;
  }
});
