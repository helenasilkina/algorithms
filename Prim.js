// https://gist.github.com/methodin/1577481

/**
 * Prim algorithm
 * 
 * Tests with:
 * var g = new Graph();
 * g.addNode('a');
 * g.addNode('b');
 * g.addNode('c');
 * g.addNode('d');
 * g.addNode('e');
 * g.addNode('f');
 * g.addEdge('a','b',1);
 * g.addEdge('b','c',3);
 * g.addEdge('a','d',3);
 * g.addEdge('b','d',2);
 * g.addEdge('d','e',3);
 * var result = Prim(g);
 */

"use strict";
var Graph = function() {
    this.edges = {};
    this.nodes = [];
    this.nodeMap = {};
    this.addNode = function(node) {
      console.log('Node add');
    };
    this.addEdge = function(source, sink, capacity) {
      console.log('Edge add');
    };
    this.edgeExists = function(source, sink) {
      console.log('Edge is exist');
    };
};
function Prim(graph) {
    var result = [];
    
    console.log(result);
    return result;
};

