import { db } from './firebase-init.js';
import { doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id'); // This is now the Firestore document ID

    if (postId) {
        const postRef = doc(db, 'posts', postId);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
            const post = postSnap.data();
            document.getElementById('post-title').textContent = post.title;
            document.getElementById('post-author').textContent = post.author;
            document.getElementById('post-date').textContent = post.date;
            document.getElementById('post-content').textContent = post.content;

            // Increment view count
            await updateDoc(postRef, {
                views: increment(1)
            });
        } else {
            document.getElementById('post-title').textContent = 'Post not found';
            document.getElementById('post-author').textContent = '';
            document.getElementById('post-date').textContent = '';
            document.getElementById('post-content').textContent = 'The requested post does not exist.';
        }
    } else {
        document.getElementById('post-title').textContent = 'Post ID not provided';
        document.getElementById('post-author').textContent = '';
        document.getElementById('post-date').textContent = '';
        document.getElementById('post-content').textContent = 'Please provide a valid Post ID.';
    }
});