const squares = document.getElementsByClassName('square');
[...squares].forEach(square => {
    square.addEventListener('click', function () {
        this.classList.toggle('loading');
    })
});