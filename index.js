const arr = [
  "./assets/Images/img1.jpg",
  "./assets/Images/img2.jpg",
  "./assets/Images/img3.jpg",
  "./assets/Images/img4.jpg",
  "./assets/Images/img5.jpg",
  "./assets/Images/img6.jpg",
  "./assets/Images/img7.jpg",
];

const container = document.getElementById("container");

const div1 = document.createElement("div");
const div2 = document.createElement("div");

const h1 = document.createElement("h1");
const leftBtn = document.createElement("button");
const rightBtn = document.createElement("button");
const mainImg = document.createElement("img");
const icon1 = document.createElement("i");
const icon2 = document.createElement("i");

let index = 0;

h1.innerText = "Slideshow View";
h1.style.color = "#5f5d6b";
h1.style.fontSize = "40px";

icon1.classList.add("fa-solid", "fa-chevron-left");
icon2.classList.add("fa-solid", "fa-chevron-right");

leftBtn.appendChild(icon1);
rightBtn.appendChild(icon2);

leftBtn.classList.add("btnStyle");
rightBtn.classList.add("btnStyle");

mainImg.classList.add("mainImgStyle");
mainImg.src = arr[0];

leftBtn.addEventListener("click", () => {
  if (index > 0) index--;
  mainImg.src = arr[index];
});

rightBtn.addEventListener("click", () => {
  if (index < arr.length - 1) index++;
  mainImg.src = arr[index];
});

div1.appendChild(leftBtn);
div1.appendChild(mainImg);
div1.appendChild(rightBtn);

div1.style.display = "flex";
div1.style.justifyContent = "space-between";
div1.style.alignItems = "center";
div1.style.gap = "40px";

for (let i = 0; i < arr.length; i++) {
  const picture = document.createElement("img");
  picture.src = arr[i];
  picture.classList.add("imgStyle");
  picture.addEventListener("click", () => {
    mainImg.src = arr[i];
    index = i;
  });

  div2.appendChild(picture);
}

div2.style.display = "flex";
div2.style.justifyContent = "space-between";
div2.style.gap = "10px";

container.appendChild(h1);
container.appendChild(div1);
container.appendChild(div2);

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.gap = "30px";
