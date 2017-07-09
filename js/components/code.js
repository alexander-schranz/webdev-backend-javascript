import $ from 'jquery';

export default function Code() {
    let code = {};

    code.initialize = function initialize($el) {
        $($el);
        code.$el = $el;
    };

    return {
        name: 'code',
        initialize: code.initialize
    };
};
