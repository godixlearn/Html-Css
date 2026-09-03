

let likes = 0;

const likeButton = document.getElementById("likeButton");

const likeCount = document.getElementById("likeCount");


function addLike(){
    likes = likes + 1;

    likeCount.textContent = "Likes: " + likes;

}

likeButton.addEventListener("click", addLike);





