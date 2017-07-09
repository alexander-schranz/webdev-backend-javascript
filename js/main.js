var lazy = require('massive-web/src/lazy');
var loader = {};

// components
loader.slides = require('bundle-loader?lazy&name=components/slides!./components/slides.js');
loader.code = require('bundle-loader?lazy&name=components/code!./components/code.js');

lazy.initialize(loader);
window.lazy = lazy;
