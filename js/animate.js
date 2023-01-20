var scribble = document.getElementById('venn');
var line = document.getElementById('line');
function elementInViewport(scribble) {

    var bounding = scribble.getBoundingClientRect();

    if (bounding.top >= 0 
        && bounding.left >= 0 
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) +200
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200) {
        
        line.style.display = "block";
        scribble.classList.add('color');
    } else {
        line.style.display = "block";
        scribble.classList.remove('color');
    }
}

const message = document.querySelector('#message');

document.addEventListener('scroll', function () {
    const messageText = elementInViewport(scribble) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

    console.log(messageText);

}, {
    passive: true
});