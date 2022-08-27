const galleryImages = document.getElementById("gallery_images");
const appendedImages = [];

// Where Images Are Stored As Objects
const imagesList = [
  {
    id: 0,
    path: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 1,
    path: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 2,
    path: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 3,
    path: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 4,
    path: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 5,
    path: "https://images.unsplash.com/photo-1561043433-9265f73e685f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 6,
    path: "https://images.unsplash.com/photo-1472555950005-7fa40ece7f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=637&q=80",
  },
  {
    id: 7,
    path: "https://images.unsplash.com/photo-1625395005224-0fce68a3cdc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
];

// Loop Over 'imagesList' And Send Objects To 'createImages'
imagesList.forEach((image) => {
  galleryImages.append(createImage(image));
});

// Check That 'galleryImages' Is Not Empty
if (!appendedImages.length) {
  const emptyMsg = document.createElement("h2");
  emptyMsg.className = "emptyMsg";
  emptyMsg.textContent = "aucune image à afficher maintenant";
  galleryImages.append(emptyMsg);
}

// Function That Creates The Images
function createImage(imageObject) {
  const image = document.createElement("div");
  image.className = "image";

  const img = document.createElement("img");
  img.setAttribute("src", `${imageObject.path}`);
  img.setAttribute("alt", `Image Number ${imageObject.id} For PizzaBlane`);

  image.append(img);

  appendedImages.push(image);
  return image;
}
