const posts = [
    { id: 1, title: '첫 번째 글입니다.', author: '박일희', date: '2024-03-13', views: 35, content: '첫 번째 글의 내용입니다. 여기에 글의 전체 내용이 표시됩니다.' },
    { id: 2, title: '두 번째 글입니다.', author: '이두희', date: '2024-03-14', views: 25, content: '두 번째 글의 내용입니다. 여기에 글의 전체 내용이 표시됩니다.' },
    { id: 3, title: '세 번째 글입니다.', author: '김세희', date: '2024-03-15', views: 15, content: '세 번째 글의 내용입니다. 여기에 글의 전체 내용이 표시됩니다.' },
    { id: 4, title: '네 번째 글입니다.', author: '최사희', date: '2024-03-16', views: 45, content: '네 번째 글의 내용입니다. 여기에 글의 전체 내용이 표시됩니다.' },
    { id: 5, title: '다섯 번째 글입니다.', author: '정오희', date: '2024-03-17', views: 55, content: '다섯 번째 글의 내용입니다. 여기에 글의 전체 내용이 표시됩니다.' },
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    if (postId) {
        const post = posts.find(p => p.id === postId);

        if (post) {
            document.getElementById('post-title').textContent = post.title;
            document.getElementById('post-author').textContent = post.author;
            document.getElementById('post-date').textContent = post.date;
            document.getElementById('post-content').textContent = post.content;
        } else {
            document.getElementById('post-title').textContent = 'Post not found';
        }
    } else {
        document.getElementById('post-title').textContent = 'Post ID not provided';
    }
});