var $ = require('jquery');

module.exports = function Loader() {
    var loader = {
        list: []
    };

    loader.load = function load(url) {
        if ($.inArray(url, loader.list) !== -1) {
            return;
        }

        $('head').append('<link rel="stylesheet" href="' + url + '">');
        loader.list.push(url);
    };

    return {
        load: loader.load
    };
}();
