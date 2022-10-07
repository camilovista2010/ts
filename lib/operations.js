'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var sum_1 = require('./operations/sum');
var divide_1 = require('./operations/divide');
var multiply_1 = require('./operations/multiply');
var subtract_1 = require('./operations/subtract');
var operation = {
  sum: sum_1.default,
  divide: divide_1.default,
  multiply: multiply_1.default,
  subtract: subtract_1.default,
};
exports.default = operation;
