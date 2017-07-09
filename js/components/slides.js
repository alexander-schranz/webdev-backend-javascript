var $ = require('jquery');

var Slides = function Slides() {
    var slides = {};

    slides.initialize = function initialize($el) {
        slides.$el = $el;
        alert('init');

        slides.bindEvents();
    };

    slides.next = function() {
        alert('left / up');
    };

    slides.prev = function() {
        alert('right / down');
    };

    slides.bindEvents = function bindEvents() {
        $(document).keypress(slides.handleKeyPress);
    };

    slides.handleKeyPress = function(event) {
        if (event.keyCode == 37 || event.keyCode == 38) {
            slides.prev();
        } else if (event.keyCode == 39 || event.keyCode == 40) {
            slides.next();
        }
    };

    return {
        name: 'slides',
        initialize: slides.initialize,
        next: slides.next,
        prev: slides.prev
    };
};

module.exports = Slides;
