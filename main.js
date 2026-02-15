const generateBtn = document.getElementById('generate-btn');
const nicknameDisplay = document.querySelector('.nickname-display');

const adjectives = ['귀여운', '사랑스러운', '엉뚱한', '행복한', '재미있는', '똑똑한', '빛나는', '용감한', '신비로운', '자유로운'];
const nouns = ['고양이', '강아지', '쿼카', '다람쥐', '라이언', '코끼리', '호랑이', '사자', '판다', '유니콘'];

generateBtn.addEventListener('click', () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    
    const nickname = `${randomAdjective} ${randomNoun}`;
    
    nicknameDisplay.textContent = nickname;
});