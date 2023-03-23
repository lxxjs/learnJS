// 브라우저가 이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않고 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 setup -> 지체없는 화면 로딩
document.addEventListener("DOMContentLoaded", setup);
let player;
let direction = {"toLeft" : false, "toUp" : false, "toRight" : false, "toDown" : false}

document.onkeypress = function(e) {
    switch (e.keyCode) {
        case 37:
            direction = {"toLeft" : false, "toUp" : false, "toRight" : false, "toDown" : false}
            direction["toLeft"] = true;
            break;
        case 38:
            direction = {"toLeft" : false, "toUp" : false, "toRight" : false, "toDown" : false}
            direction["toDown"] = true;
            break;
        case 39:
            direction = {"toLeft" : false, "toUp" : false, "toRight" : false, "toDown" : false}
            direction["toRight"] = true;
            break;
        case 40:
            direction = {"toLeft" : false, "toUp" : false, "toRight" : false, "toDown" : false}
            direction["toUp"] = true;
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
            this.x -= 5;
        } else if (direction["toRight"]) {
            this.x += 5;
        } else if (direction["toUp"]) {
            this.y += 5;
        } else if (direction["toDown"]) {
            this.y -= 5;
        }
    }
}

function setup() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //draw home & goal
    ctx.fillStyle = "#b84d69"
    ctx.fillRect(350, 50, 100, 50);
    ctx.fillRect(350, 700, 100, 50);
    player = new MaBoi(50, 390, ctx);
    player.draw();
    animateLoop();
}

function animateLoop() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    requestAnimationFrame(animateLoop);
    
    ctx.clearRect(0, 0, 800, 800);
    player.draw();

}