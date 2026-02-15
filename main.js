const posts = [
    { id: 1, title: '첫 번째 글입니다.', author: '박일희', date: '2024-03-13', views: 35 },
    { id: 2, title: '두 번째 글입니다.', author: '이두희', date: '2024-03-14', views: 25 },
    { id: 3, title: '세 번째 글입니다.', author: '김세희', date: '2024-03-15', views: 15 },
    { id: 4, title: '네 번째 글입니다.', author: '최사희', date: '2024-03-16', views: 45 },
    { id: 5, title: '다섯 번째 글입니다.', author: '정오희', date: '2024-03-17', views: 55 },
];

const boardBody = document.querySelector('.board-table tbody');

posts.sort((a, b) => b.id - a.id).forEach(post => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${post.id}</td>
        <td><a href="#">${post.title}</a></td>
        <td>${post.author}</td>
        <td>${post.date}</td>
        <td>${post.views}</td>
    `;
    boardBody.appendChild(row);
});