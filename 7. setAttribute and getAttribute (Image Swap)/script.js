let btn = document.querySelector(".btn");
let img1 = document.querySelector("#image1");
let img2 = document.querySelector("#image2");

btn.addEventListener("click", () => {
  let image1 = img1.getAttribute("src");
  let image2 = img2.getAttribute("src");
  img1.setAttribute("src", image2);
  img2.setAttribute("src", image1);
});
