const generateBtn = document.getElementById('generate-btn');
const nicknameDisplay = document.querySelector('.nickname-display');

const nicknames = [
    '아이유가뭐하는아이유',
    '일곱글자닉네임',
    '오글오글',
    '닉네임짓기귀찮아',
    '배고픈데밥먹을까',
    '아재개그좋아해요',
    '웃어주세요',
    '반갑다친구야',
    '나는야개그왕',
    '센스있는척',
    '중요한건꺾이지않는마음',
    '오늘도무사히',
    '내일은월급날',
    '피할수없으면즐겨라',
    '가는말이고와야오는말이곱다'
];

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * nicknames.length);
    const nickname = nicknames[randomIndex];
    nicknameDisplay.textContent = nickname;
});