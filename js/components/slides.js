var $ = require('jquery');

var Slides = function Slides() {
    var slides = {
        activeClass: 'slide--active',
        hideClass: 'slide--hide',
        slideNumber: 1,
        zoom: 1
    };

    /**
     * Initialize and bind events.
     */
    slides.initialize = function initialize($el, options) {
        slides.$el = $el;
        slides.$active = $el.children('.' + slides.activeClass);
        slides.slideNumber = options.number ? options.number : 0;

        slides.bindEvents();
        slides.setUrl();
    };

    /**
     * Go to next slide.
     */
    slides.next = function() {
        var $next = slides.$active.next();

        if (!$next.length) {
            return;
        }

        ++slides.slideNumber;

        slides.setActive($next);
    };

    /**
     * Go to prev slide.
     */
    slides.prev = function() {
        var $prev = slides.$active.prev();

        if (!$prev.length) {
            return;
        }

        --slides.slideNumber;

        slides.setActive($prev);
    };

    /**
     * Set active slide to specific element.
     */
    slides.setActive = function($el) {
        slides.$active.removeClass(slides.activeClass);
        slides.$active.addClass(slides.hideClass);

        $el.removeClass(slides.hideClass);
        $el.addClass(slides.activeClass);

        slides.$active = $el;
        slides.setUrl();
    };

    /**
     * Set slide url.
     */
    slides.setUrl = function() {
        history.replaceState({}, '', window.location.pathname + '?slide=' + slides.slideNumber);
    };

    /**
     * Bind dom events.
     */
    slides.bindEvents = function bindEvents() {
        $(document).keydown(slides.handleKeyboard);
        $(document).dblclick(function() {
            slides.next();
        });
    };

    /**
     * Handle keyboard events.
     */
    slides.handleKeyboard = function(event) {
        if (event.keyCode == 37 || event.keyCode == 38) {
            slides.prev();
        } else if (event.keyCode == 39 || event.keyCode == 40) {
            slides.next();
        }
    };

    return {
        initialize: slides.initialize,
        next: slides.next,
        prev: slides.prev
    };
};

module.exports = Slides;
