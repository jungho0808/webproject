const posts = [
    { id: 1, title: '웹사이트 방문을 환영합니다!', author: '관리자', date: '2024-03-13', views: 135, content: '저희 웹사이트에 오신 것을 진심으로 환영합니다. 이 곳은 다양한 정보를 공유하고 소통하는 공간입니다. 앞으로 많은 관심과 참여 부탁드립니다.' },
    { id: 2, title: '리액트(React)란 무엇인가?', author: '개발자', date: '2024-03-14', views: 225, content: '리액트는 페이스북에서 개발한 자바스크립트 라이브러리로, 사용자 인터페이스를 만들기 위해 사용됩니다. 컴포넌트 기반 아키텍처를 특징으로 하며, 효율적인 렌더링을 위해 가상 DOM을 사용합니다.' },
    { id: 3, title: '오늘의 점심 메뉴 추천', author: '맛잘알', date: '2024-03-15', views: 315, content: '점심 메뉴 고민이신가요? 오늘은 뜨끈한 국물이 일품인 쌀국수를 추천합니다. 숙주나물과 함께라면 더욱 맛있게 즐길 수 있습니다.' },
    { id: 4, title: '봄맞이 여행지 추천', author: '여행가', date: '2024-03-16', views: 145, content: '따스한 봄볕을 맞으며 떠나기 좋은 여행지를 소개합니다. 벚꽃이 만개한 경주, 유채꽃이 아름다운 제주도 등 국내에도 멋진 곳이 많습니다.' },
    { id: 5, title: '반려동물과 함께하는 삶', author: '집사', date: '2024-03-17', views: 155, content: '반려동물은 우리에게 큰 기쁨과 위로를 줍니다. 하지만 하나의 생명을 책임지는 일이므로 신중하게 결정해야 합니다. 입양 전 충분한 고민과 준비가 필요합니다.' },
];

const boardBody = document.querySelector('.board-table tbody');

posts.sort((a, b) => b.id - a.id).forEach(post => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${post.id}</td>
        <td><a href="post.html?id=${post.id}">${post.title}</a></td>
        <td>${post.author}</td>
        <td>${post.date}</td>
        <td>${post.views}</td>
    `;
    boardBody.appendChild(row);
});