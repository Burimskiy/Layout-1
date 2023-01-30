var prev = document.getElementById('sld-1-prev');
var next = document.getElementById('sld-1-next');
var sliderTrack = document.querySelector('.slider-track');
var itemsCount = document.querySelectorAll('.slider-item').length;

var newPosition = 321;
var position = 0;

prev.addEventListener('click', function() {
    if (position != 0) {
        position += newPosition;
        sliderTrack.style.transform = 'translateX('+position+'px)';
    }
});

next.addEventListener('click', function() {
    var endPosition = - ( itemsCount - 3 )*newPosition;
    if (position >  endPosition) {
        position -= newPosition;
        console.log(endPosition);
        sliderTrack.style.transform = 'translateX(' + position + 'px)';
    } else {
        sliderTrack.style.transform = 'translateX(' + 0 + 'px)';
        position = 0;
    }
});