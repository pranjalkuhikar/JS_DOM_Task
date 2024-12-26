let img = document.querySelectorAll("img");
let showImg = document.querySelector(".show img");
let bg = document.querySelector(".bg");
let close = document.querySelector(".close");
img.forEach((img) => {
  img.addEventListener("click", () => {
    console.log(img.getAttribute("src"));
    let imageSrc = img.getAttribute("src");
    showImg.setAttribute("src", imageSrc);
    bg.style.display = "flex";
  });
});

close.addEventListener("click", () => {
  bg.style.display = "none";
});
