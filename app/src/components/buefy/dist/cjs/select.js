'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-5094d8df.js');
require('./helpers.js');
require('./chunk-805257cc.js');
require('./chunk-c0ff4e55.js');
require('./chunk-fa132d6c.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_14 = require('./chunk-8a7b4eb6.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_14.Select);
  }
};
__chunk_5.use(Plugin);

exports.BSelect = __chunk_14.Select;
exports.default = Plugin;
