// 브라우저가 이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않고 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 setup -> 지체없는 화면 로딩
document.addEventListener("DOMContentLoaded", setup);

const mapWidth = 800;
const mapHeight = 800;
const goalX = 350;
const goalY = 700;
const goalW = 100;
const goalH = 50;

const vel = 5; // player velocity

let player;
let direction = {"toLeft" : false, "toUp" : false, "toRight" : false, "toDown" : false}

document.onkeydown = function(e) {     
    switch (e.key) {
        case "ArrowLeft":
            direction["toLeft"] = true;
            break;
        case "ArrowDown":
            direction["toDown"] = true;
            break;
        case "ArrowRight":
            direction["toRight"] = true;
            break;
        case "ArrowUp":
            direction["toUp"] = true;
            break;
    }
};
document.onkeyup = function(e) {
    switch (e.key) {
        case "ArrowLeft":
            direction["toLeft"] = false;
            break;
        case "ArrowDown":
            direction["toDown"] = false;
            break;
        case "ArrowRight":
            direction["toRight"] = false;
            break;
        case "ArrowUp":
            direction["toUp"] = false;
            break;
    }
};

class MaBoi {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }
    
    draw() {
        this.ctx.fillStyle = "#f96d6d"
        this.ctx.fillRect(this.x, this.y, 25, 25);
        if (direction["toLeft"]) {
            this.x -= vel;
        } else if (direction["toRight"]) {
            this.x += vel;
        }
        if (direction["toUp"]) {
            this.y -= vel; // warning : y value increases as it goes down
        } else if (direction["toDown"]) {
            this.y += vel;
        }
    }

    update() {
        // canvas border
        if (this.x <= 0) {
            this.x = 0;
        } else if (this.x >= mapWidth - 25) {
            this.x = mapWidth - 25;
        }
        if (this.y <= 0) {
            this.y = 0;
        } else if (this.y >= mapHeight - 25) {
            this.y = mapHeight - 25;
        }

        // touchdown
        if (this.x > goalX - 25 + vel && this.x < goalX + goalW - vel
            && this.y > goalY - 25 + vel && this.y < goalY + goalH - vel) {
                direction["toLeft"] = false;
                direction["toUp"] = false;
                direction["toRight"] = false;
                direction["toDown"] = false;
                alert("success !");
                this.x = 50;
                this.y = 390;
        }
    }
}

function setup() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width =  mapWidth;
    canvas.height = mapHeight;

    player = new MaBoi(50, 390, ctx);
    player.draw();
    animateLoop();
}

function animateLoop() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, 800, 800);
    
    //draw home & goal
    ctx.fillStyle = "#b84d69"
    ctx.fillRect(350, 50, 100, 50);
    ctx.fillRect(goalX, goalY, goalW, goalH);
    
    player.draw();
    player.update();
    
    requestAnimationFrame(animateLoop);
}