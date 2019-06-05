const squares = document.getElementsByClassName('square');
[...squares].forEach(square => {
    square.addEventListener('click', function () {
        this.classList.toggle('loading');
    })
});

const animationSelect = document.getElementById('animation-type');
const animationSpeed = document.getElementById('animation-speed');
const svgObject = document.getElementById('svg-object');
animationSelect.addEventListener('change', function () {
    console.log(animationSelect.value);
    svgObject.style.animationTimingFunction = animationSelect.value;
});
animationSpeed.addEventListener('change', function () {
    console.log(animationSpeed.value);
    svgObject.style.animationDuration = animationSpeed.value + 's';
});
