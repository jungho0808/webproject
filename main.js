document.addEventListener('DOMContentLoaded', () => {
    // Gacha Feature
    const drawButton = document.getElementById('draw-button');
    const itemInput = document.getElementById('item-input');
    const resultDisplay = document.getElementById('result-display');

    drawButton.addEventListener('click', () => {
        const items = itemInput.value.split('\n').filter(item => item.trim() !== '');

        if (items.length === 0) {
            resultDisplay.textContent = '추첨할 항목을 입력하세요.';
            return;
        }

        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];

        resultDisplay.textContent = randomItem;
    });

    // View Switching
    const gachaTab = document.getElementById('gacha-tab');
    const rouletteTab = document.getElementById('roulette-tab');
    const pinballTab = document.getElementById('pinball-tab');
    const gachaView = document.getElementById('gacha-view');
    const rouletteView = document.getElementById('roulette-view');
    const pinballView = document.getElementById('pinball-view');

    gachaTab.addEventListener('click', () => {
        gachaTab.classList.add('active');
        rouletteTab.classList.remove('active');
        pinballTab.classList.remove('active');
        gachaView.classList.add('active');
        rouletteView.classList.remove('active');
        pinballView.classList.remove('active');
    });

    rouletteTab.addEventListener('click', () => {
        gachaTab.classList.remove('active');
        rouletteTab.classList.add('active');
        pinballTab.classList.remove('active');
        gachaView.classList.remove('active');
        rouletteView.classList.add('active');
        pinballView.classList.remove('active');
        
        // Redraw roulette when tab is clicked
        items = document.getElementById('item-input').value.split('\n').filter(item => item.trim() !== '');
        if(items.length > 0) {
            drawRoulette();
        }
    });

    pinballTab.addEventListener('click', () => {
        gachaTab.classList.remove('active');
        rouletteTab.classList.remove('active');
        pinballTab.classList.add('active');
        gachaView.classList.remove('active');
        rouletteView.classList.remove('active');
        pinballView.classList.add('active');
        
        // Initialize pinball when tab is clicked
        initPinball();
    });
});