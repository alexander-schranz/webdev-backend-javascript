var lazy = require('massive-web/src/lazy');

var componentRegistry = {};
var serviceRegistry = {};

// components
componentRegistry.slides = require('bundle-loader?lazy&name=components/slides!./components/slides.js');
componentRegistry.code = require('bundle-loader?lazy&name=components/code!./components/code.js');

lazy.initialize(componentRegistry, serviceRegistry);
window.lazy = lazy;
