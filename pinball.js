const pinballContainer = document.getElementById('pinball-canvas-container');
const launchButton = document.getElementById('launch-button');

// Matter.js modules
const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
const engine = Engine.create();
const world = engine.world;

// create a renderer
const render = Render.create({
    element: pinballContainer,
    engine: engine,
    options: {
        width: 400,
        height: 600,
        wireframes: false,
        background: '#f0f2f5'
    }
});

// create runner
const runner = Runner.create();

// Add bodies
const ball = Bodies.circle(200, 50, 10, { restitution: 0.5, label: 'ball' });
const ground = Bodies.rectangle(200, 610, 420, 20, { isStatic: true });
const leftWall = Bodies.rectangle(-10, 300, 20, 620, { isStatic: true });
const rightWall = Bodies.rectangle(410, 300, 20, 620, { isStatic: true });

// Pegs
const pegs = [];
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 10; j++) {
        const x = 50 + j * 35 + (i % 2 === 0 ? 17.5 : 0);
        const y = 150 + i * 35;
        if(x < 380) {
            pegs.push(Bodies.circle(x, y, 5, { isStatic: true, restitution: 0.5 }));
        }
    }
}

// Slots
let slots = [];

function createSlots() {
    Composite.remove(world, slots);
    slots = [];
    const items = document.getElementById('item-input').value.split('\n').filter(item => item.trim() !== '');
    if (items.length < 2) return;

    const slotWidth = 400 / items.length;
    for (let i = 0; i < items.length; i++) {
        const x = slotWidth * i + slotWidth / 2;
        slots.push(Bodies.rectangle(x, 550, slotWidth, 100, {
            isStatic: true,
            isSensor: true,
            label: items[i],
            render: { fillStyle: colors[i % colors.length] }
        }));
    }
    Composite.add(world, slots);
}

// Add all bodies to the world
Composite.add(world, [ground, leftWall, rightWall, ...pegs]);

// Launch button
launchButton.addEventListener('click', () => {
    createSlots();
    const newBall = Bodies.circle(Math.random() * 200 + 100, 50, 10, { restitution: 0.5, label: 'ball' });
    Composite.add(world, newBall);
});

// Collision detection
Matter.Events.on(engine, 'collisionStart', (event) => {
    const pairs = event.pairs;
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        if (pair.bodyA.label === 'ball' && pair.bodyB.isSensor) {
            alert(`Winner: ${pair.bodyB.label}`);
            Composite.remove(world, pair.bodyA);
        } else if (pair.bodyB.label === 'ball' && pair.bodyA.isSensor) {
            alert(`Winner: ${pair.bodyA.label}`);
            Composite.remove(world, pair.bodyB);
        }
    }
});


// run the renderer
Render.run(render);
// run the engine
Runner.run(runner, engine);

function initPinball() {
    createSlots();
}