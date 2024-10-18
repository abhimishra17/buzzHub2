const postButton = document.getElementById('post-button');
const postFeed = document.getElementById('post-feed');

postButton.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image-upload').files[0];

    if (title.trim() === "" || description.trim() === "") {
        alert("Title and description are required.");
        return;
    }

    const post = document.createElement('div');
    post.className = 'post';

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    post.appendChild(postTitle);

    const postDescription = document.createElement('p');
    postDescription.textContent = description;
    post.appendChild(postDescription);

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = () => {
            const postImage = document.createElement('img');
            postImage.src = reader.result;
            post.appendChild(postImage);
        };
        reader.readAsDataURL(imageFile);
    }

    // Create like and dislike buttons
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.className = 'like-button';

    const dislikeButton = document.createElement('button');
    dislikeButton.textContent = 'Dislike';
    dislikeButton.className = 'dislike-button';

    const likeCount = document.createElement('span');
    likeCount.textContent = ' Likes: 0';
    likeCount.className = 'like-count';

    let likes = 0;

    likeButton.addEventListener('click', () => {
        likes++;
        likeCount.textContent = ` Likes: ${likes}`;
    });

    dislikeButton.addEventListener('click', () => {
        alert('You disliked the post');
    });

    post.appendChild(likeButton);
    post.appendChild(dislikeButton);
    post.appendChild(likeCount);

    postFeed.appendChild(post);

    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('image-upload').value = "";
});

