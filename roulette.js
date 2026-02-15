const canvas = document.getElementById('roulette-canvas');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spin-button');

let items = [];
const colors = ["#FFC857", "#E9724C", "#C5283D", "#481D24", "#255F85"];
let startAngle = 0;
let arc = 0;
let spinTimeout = null;
let spinTime = 0;
let spinTimeTotal = 0;

function drawRoulette() {
    arc = Math.PI / (items.length / 2);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    for (let i = 0; i < items.length; i++) {
        const angle = startAngle + i * arc;
        ctx.fillStyle = colors[i % colors.length];

        ctx.beginPath();
        ctx.arc(200, 200, 190, angle, angle + arc, false);
        ctx.arc(200, 200, 0, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.translate(200 + Math.cos(angle + arc / 2) * 150, 200 + Math.sin(angle + arc / 2) * 150);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = items[i];
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
    }
}

function rotate() {
    const spinAngle = Math.random() * 10 + 10; // Random spin power
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 4000; // Random spin duration
    
    function rotateWheel() {
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
            stopRotateWheel();
            return;
        }
        const spinAngle = -startAngle + Math.random() * 10;
        startAngle += (spinAngle * Math.PI / 180);
        drawRoulette();
        spinTimeout = setTimeout(rotateWheel, 30);
    }

    rotateWheel();
}

function stopRotateWheel() {
    clearTimeout(spinTimeout);
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    ctx.save();
    ctx.font = 'bold 30px Arial';
    const text = items[index]
    ctx.fillText(text, 200 - ctx.measureText(text).width / 2, 200 + 10);
    ctx.restore();
}

spinButton.addEventListener('click', () => {
    items = document.getElementById('item-input').value.split('\n').filter(item => item.trim() !== '');
    if (items.length < 2) {
        alert("룰렛을 돌리려면 2개 이상의 항목이 필요합니다.");
        return;
    }
    rotate();
});

// Initial draw
document.addEventListener('DOMContentLoaded', () => {
    items = document.getElementById('item-input').value.split('\n').filter(item => item.trim() !== '');
    if(items.length > 0) {
        drawRoulette();
    }
});