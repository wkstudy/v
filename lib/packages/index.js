'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var packages_button_index = require('./button/index.js');
var packages_cell_index = require('./cell/index.js');
require('vue');

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VButton: packages_button_index.VButton,
  VCell: packages_cell_index.VCell
});

const install = (app, options) => {
    const _components = components;
    // eslint-disable-next-line guard-for-in
    for (const key in _components) {
        const item = _components[key];
        app.use(item);
    }
};
var index = { install };

exports.VButton = packages_button_index.VButton;
exports.VCell = packages_cell_index.VCell;
exports["default"] = index;
