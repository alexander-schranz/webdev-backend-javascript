var lazy = require('massive-web/src/lazy');
var slides = require('bundle-loader?lazy&name=components/slides!./components/slides.js');
var code = require('bundle-loader?lazy&name=components/code!./components/code.js');

lazy.registerComponent('slides', slides);
lazy.registerComponent('code', code);
