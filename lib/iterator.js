'use strict';

var dummyIterator = {};
dummyIterator[Symbol.iterator] = function () {
  var c = 0;
  return {
    next: function () {
      switch (c) {
        case 0:
          c++;
          return { value: 'hello', done: false };
          break;
        case 1:
          c++;
          return { value: 'world', done: false };
          break;
        case 2:
          return { done: true };
      }
    }
  }
}
module.exports = dummyIterator;
