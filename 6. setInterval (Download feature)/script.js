let btn = document.querySelector(".btn");
let download = document.querySelector(".download");
let time = document.querySelector("#time");
let count = 0;
btn.addEventListener("click", () => {
  let intervalId = setInterval(() => {
    download.style.width = `${count}%`;
    time.textContent = `${count}%`;
    count++;
    if (count > 100) {
      btn.textContent = "Downloaded";
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
      clearInterval(intervalId);
    }
  }, 50);
});
