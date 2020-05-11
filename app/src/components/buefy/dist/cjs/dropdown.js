'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-5094d8df.js');
require('./chunk-805257cc.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-ae7e641a.js');
var __chunk_12 = require('./chunk-2a9ddcd6.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_12.Dropdown);
    __chunk_5.registerComponent(Vue, __chunk_12.DropdownItem);
  }
};
__chunk_5.use(Plugin);

exports.BDropdown = __chunk_12.Dropdown;
exports.BDropdownItem = __chunk_12.DropdownItem;
exports.default = Plugin;
