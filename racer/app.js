// 브라우저가 이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않고 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 setup -> 지체없는 화면 로딩
document.addEventListener("DOMContentLoaded", setup);

let toLeft = false;
let toRight = false;

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            toLeft = true;
            console.log("toLeft");
            break;
        // case 38:
        //     str = 'Up Key pressed!';
        //     break;
        case 39:
            toRight = true;
            console.log("toRight");
            break;
        // case 40:
        //     str = 'Down Key pressed!';
        //     break;
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
        if (toLeft) {
            this.x -= 5;
        } else if (toRight) {
            this.x += 5;
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
    const mb = new MaBoi(50, 390, ctx);

    animateLoop(mb);
}

function animateLoop(mb) {
    mb.draw();

    requestAnimationFrame(animateLoop(mb));
}