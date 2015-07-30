/*
* @import Heap.js
*
* Tests with:
* var heap = [2,5,3,8,10,1,2,3,1];
* heapSort(heap);
*/

function heapSort(heap) {
  heap.forEach(function(element, index, heap) {
    heap.insert(heap.length - index, extractMax()) // methods from Heap.js
  });
  currentSize = heap.length - 1; // variable from Heap.js
}    

