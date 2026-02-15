document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('pinball-canvas-container');
    const launchButton = document.getElementById('launch-button');
    const itemsInput = document.getElementById('item-input');

    // Matter.js modules
    const { Engine, Render, Runner, World, Bodies, Events } = Matter;

    const engine = Engine.create();
    const world = engine.world;

    const render = Render.create({
        element: container,
        engine: engine,
        options: {
            width: 500,
            height: 700,
            wireframes: false,
            background: '#111'
        }
    });

    const cols = 11;
    const rows = 10;
    const spacing = 45;
    const pegs = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols + 1; j++) {
            let x = j * spacing;
            if (i % 2 === 0) {
                x += spacing / 2;
            }
            const y = spacing + i * spacing;
            const peg = Bodies.circle(x, y, 10, {
                isStatic: true,
                restitution: 0.5,
                render: { fillStyle: '#555' }
            });
            pegs.push(peg);
        }
    }
    World.add(world, pegs);

    const ground = Bodies.rectangle(250, 710, 500, 20, { isStatic: true });
    const leftWall = Bodies.rectangle(-10, 350, 20, 700, { isStatic: true });
    const rightWall = Bodies.rectangle(510, 350, 20, 700, { isStatic: true });
    World.add(world, [ground, leftWall, rightWall]);

    let slots = [];
    function setupSlots() {
        World.remove(world, slots);
        slots = [];
        const items = itemsInput.value.split('\n').filter(item => item.trim() !== '');
        if (items.length < 2) return;

        const numSlots = items.length;
        const slotWidth = 500 / numSlots;
        const dividerHeight = 100;

        for (let i = 0; i < numSlots + 1; i++) {
            const x = i * slotWidth;
            const divider = Bodies.rectangle(x, 700 - dividerHeight / 2, 10, dividerHeight, {
                isStatic: true,
                render: { fillStyle: 'white' }
            });
            slots.push(divider);
        }

        World.add(world, slots);
    }
    
    launchButton.addEventListener('click', () => {
        setupSlots();
        const items = itemsInput.value.split('\n').filter(item => item.trim() !== '');
        if (items.length < 2) {
            alert('2개 이상의 항목을 입력하세요.');
            return;
        }
        const ball = Bodies.circle(Math.random() * 300 + 100, 50, 12, {
            restitution: 0.8,
            label: 'ball',
            render: { fillStyle: 'yellow' }
        });
        World.add(world, ball);
    });

    Events.on(engine, 'collisionStart', (event) => {
        const pairs = event.pairs;
        pairs.forEach(pair => {
            const { bodyA, bodyB } = pair;
            if (bodyA.label === 'ball' || bodyB.label === 'ball') {
                const ball = bodyA.label === 'ball' ? bodyA : bodyB;
                if (ball.position.y > 600) {
                    const items = itemsInput.value.split('\n').filter(item => item.trim() !== '');
                    const slotWidth = 500 / items.length;
                    const slotIndex = Math.floor(ball.position.x / slotWidth);
                    if (items[slotIndex]) {
                        setTimeout(() => {
                           alert(`결과: ${items[slotIndex]}`);
                           World.remove(world, ball);
                        }, 100);
                    }
                }
            }
        });
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
});