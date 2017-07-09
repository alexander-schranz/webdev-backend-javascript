var hljs = require('highlight.js');
var styleLoader = require('../services/style-loader.js');

module.exports = function Code() {
    var code = {};

    code.initialize = function initialize($el) {
        $el.each(function(i, block) {
            hljs.highlightBlock(block);
        });

        styleLoader.load('/css/highlight.css');
    };

    return {
        initialize: code.initialize
    };
};
