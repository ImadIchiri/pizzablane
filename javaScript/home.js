const homeImage = document.getElementById("home_image");
const images = ["pizza_home.jpg", "tacos_home.jpg"];
let appendedImages = [];
let currentImage = 0;

const insertImage = (img, index) => {
  const image = document.createElement("img");
  image.setAttribute("src", `images/home/${img}`);
  image.setAttribute("alt", `Image Name Is ${img}`);
  image.setAttribute("data-number", index);

  appendedImages.push(image);
  return image;
};

images.forEach((img, index) => {
  homeImage.append(insertImage(img, index));
});

setInterval(() => {
  currentImage++;
  currentImage = currentImage > images.length - 1 ? 0 : currentImage;
  appendedImages.forEach((img) => {
    Number(img.dataset.number) === currentImage
      ? (img.style.opacity = "1")
      : (img.style.opacity = "0");
  });
}, 2000);
