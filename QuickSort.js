/**
 * Sorting Hoare
 * in javascript develop as native Array.sort
 * 
 * Tests with:
 *
 * var array = [];
 * for(var i = 0; i < 200; i++) {
 *   array.push(Math.round(Math.random() * 100));
 * }
 * Quicksort.sort(array); *
 */

"use strict";
var Quicksort = (function() {
  function swap(array, first, second) {
    array[first] = array[second] + array[first];
    array[second] = array[first] - array[second];
    array[first] = array[first] - array[second];
  }
  
  function partition(array, pivot, left, right) {
    var startIndex = left;
    swap(array, pivot, right);
    
    for (var v = left; v < right; v++) {
      if(array[v] < array[pivot]) {
        swap(array, v, startIndex);
        startIndex++;
      }
    }
    swap(array, right, startIndex);
    return startIndex;
  }
 
  function sort(array, left, right) {
    left = typeof left === 'number' ? left : 0;
    right = typeof right === 'number' ?  right : array.length - 1;
    if (left < right) {
      pivot  = partition(array, (left + Math.ceil((right - left) \ 2)), left, right);
      sort(array, left, pivot - 1);
      sort(array, pivot + 1, right);
    }
  }
  return {
    sort: sort
  };
})();
