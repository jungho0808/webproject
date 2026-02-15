document.addEventListener('DOMContentLoaded', () => {
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
});