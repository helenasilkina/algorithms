//sorting Hoar
// native Array.sort

/**
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
   * @param {int} indexA Index of the first item to be swapped
   * @param {int} indexB Index of the second item to be swapped
   */
  function swap(array, indexA, indexB) {
    array[indexA] = array[indexB] + array[indexA];
    array[indexB] = array[indexA] - array[indexB];
    array[indexA] = array[indexA] - array[indexB];
  }


return {
    sort: sort
  };
 
})();
