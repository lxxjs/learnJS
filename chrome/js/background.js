images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg"
];

function getRandomBg() {
    const index = Math.floor(images.length * Math.random());
    const bgimg = document.createElement("img");
    bgimg.src = `img/${images[index]}`;
    document.body.appendChild(bgimg);
}

getRandomBg();