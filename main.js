import { db } from './firebase-init.js';
import { collection, query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const boardBody = document.querySelector('.board-table tbody');

async function fetchPosts() {
    boardBody.innerHTML = ''; // Clear existing posts
    const postsCol = collection(db, 'posts');
    const q = query(postsCol, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);

    let id = 1; // Assign a sequential ID for display purposes
    querySnapshot.forEach((doc) => {
        const post = doc.data();
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id++}</td>
            <td><a href="post.html?id=${doc.id}">${post.title}</a></td>
            <td>${post.author}</td>
            <td>${post.date}</td>
            <td>${post.views || 0}</td>
        `;
        boardBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', fetchPosts);