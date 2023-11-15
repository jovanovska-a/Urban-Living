document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.bxs-star');
    const likeBtn = document.getElementById('likeBtn');
    const commentInput = document.getElementById('comment-input');
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');

    stars.forEach(star => {
        star.addEventListener('mouseover', hoverStar);
        star.addEventListener('mouseout', resetStars);
        star.addEventListener('click', selectStar);
    });

    function hoverStar(event) {
        const hoveredStar = event.target;
        const starIndex = Array.from(stars).indexOf(hoveredStar) + 1;

        resetStars();
        highlightStars(starIndex);
    }

    function resetStars() {
        stars.forEach(star => star.classList.remove('active'));
    }

    function highlightStars(endIndex) {
        for (let i = 0; i < endIndex; i++) {
            stars[i].classList.add('active');
        }
    }

    function selectStar(event) {
        const selectedStar = event.target;
        const selectedIndex = Array.from(stars).indexOf(selectedStar) + 1;

        highlightStars(selectedIndex);

        alert('Thank you for rating this product!');
    }

    likeBtn.addEventListener('click', function(){
        const likeText = likeBtn.innerText;

        if (likeText.includes('You liked')) {
            likeBtn.innerText = 'Like this product';
        } else {
            likeBtn.innerText = 'You liked this product';
        }
    })

    commentForm.addEventListener('submit', function(e){
        e.preventDefault();
        const commentValue = commentInput.value;

        if (commentValue.trim() !== '') {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <p class="user">anastasija:<p>
                <p class="comment">${commentValue}</p>
            `;

            commentsContainer.appendChild(commentElement);

            commentInput.value = '';
        }
    })
});
