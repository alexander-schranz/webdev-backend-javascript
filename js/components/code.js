var $ = require('jquery');

module.exports = function Code() {
    var code = {};

    code.initialize = function initialize($el) {
        $($el);
        code.$el = $el;
    };

    return {
        initialize: code.initialize
    };
};
