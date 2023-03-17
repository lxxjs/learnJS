const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d'); // canvas에 접근, 2d 렌더링 컨텍스트 객체 생성

canvas.width =  window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let animation;
let timer = 0;
const cactusArray = [];
let isJump = false;
let jumpTime = 0;

const dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


function everyFrame() {
    animation = requestAnimationFrame(everyFrame);
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (timer % 200 === 0) {
        const cactus = new Cactus();
        cactusArray.push(cactus);
    }
    
    cactusArray.forEach((cac, index, thisArray) => {
        if (cac.x < 0) {
            thisArray.splice(index, 1);
        }
        cac.x -= 2;
        collisionCheck(dino, cac);
        cac.draw();
    })
    
    if (isJump === true) {
        dino.y -= 2;
        jumpTime++;
    }
    if (isJump === false) {
        if (dino.y < 200) {
            dino.y += 2;
        }
    }
    if (jumpTime > 100) {
        isJump = false;
        jumpTime = 0;
    }
    
    dino.draw();
};

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        isJump = true;
    }
});

function collisionCheck(dino, cactus) {
    const xDiff = cactus.x - (dino.x + dino.width);
    const yDiff = cactus.y - (dino.y + dino.height);
    if (xDiff < 0 && yDiff < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}

dino.draw();
everyFrame();