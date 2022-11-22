const images = [
  "austria.jpg",
  "london.jpg",
  "newyork.jpg",
  "newzealand.jpg",
  "paris.jpg",
  "seoul.jpg",
  "tokyo.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;
bgImage.classList.add("bgImage");

document.body.appendChild(bgImage);
