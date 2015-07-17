/**
 * Sorting Hoare
 * in javascript develop as native Array.sort
 * 
 * Tests with:
 *
 * var array = [];
 * for(var i = 0; i < 20; i++) {
 *   array.push(Math.round(Math.random() * 100));
 * }
 *
 * Quicksort.sort(array);
 *
 */
 
var Quicksort = (function() {
  
  /**
   * Swaps two values in the heap
   * @param {int} first Index of the first item
   * @param {int} second Index of the second item
   */
  function swap(array, first, second) {
    array[first] = array[second] + array[first];
    array[second] = array[first] - array[second];
    array[first] = array[first] - array[second];
  }
  
  /**
   * Partitions the (sub)array into values less than and greater than the pivot value
   * @param {Array} array The target array
   * @param {int} pivot The index of the pivot
   * @param {int} left The index of the leftmost element
   * @param {int} left The index of the rightmost element
   */
  function partition(array, pivot, left, right) {
    var startIndex = left;
    swap(array, pivot, right);
    for(var v = left; v < right; v++) {
      if(array[v] < array[pivot]) {
        swap(array, v, startIndex);
        startIndex++;
      }
    }
    swap(array, right, startIndex);
    return startIndex;
  }
 
  /**
   * Sort array
   * @param {Array} array The target array
   * @param {int} left The index of the leftmost element, defaults 0
   * @param {int} right The index of the rightmost element, defaults array.length-1
   */
  function sort(array, left, right) {
 
    var pivot = null;
 
    if(typeof left !== 'number') {
      left = 0;
    }
 
    if(typeof right !== 'number') {
      right = array.length - 1;
    }
 
    // effectively set our base
    // case here. When left == right
    // we'll stop
    if(left < right) {
 
      // pick a pivot between left and right
      // and update it once we've partitioned
      // the array to values < than or > than
      // the pivot value
      pivot     = left + Math.ceil((right - left) * 0.5);
      newPivot  = partition(array, pivot, left, right);
 
      // recursively sort to the left and right
      sort(array, left, newPivot - 1);
      sort(array, newPivot + 1, right);
    }
 
  }


return {
    sort: sort
  };
 
})();
