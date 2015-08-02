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
 * g.addEdge('a','b',1);
 * g.addEdge('b','c',3);
 * g.addEdge('a','d',3);
 * g.addEdge('b','d',2);
 * g.addEdge('d','e',3);
 * var result = Prim(g);
 */
"use strict";
var Edge = function(source, sink, capacity) {
    this.source = source;
    this.sink = sink;
    this.capacity = capacity;
};
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
    var usedNodes = {};

    // find graph minimun     
    function findMinimum(graph) {
        var minimum = [Infinity, Null],
        edges = graph.edges;

        edges.forEach(function(edge, i, edges) {
            edge.forEach(function(property, index, edge) {
                if (property.capacity < minimum[0] && usedNodes[property.sink] === undefined) {
                        minimum = [property.capacity, property.sink];
                }
            });    
        });
        return minimum[1];
    }
    
    var node = graph.nodes[Math.round(Math.random() * (graph.nodes.length-1))];
    result.push(node);
    usedNodes[node] = true;
    
    var minimum = findMinimum(g);
    while(minimum != null) {
        result.push(minimum);
        usedNodes[minimum] = true;
        minimum = findMinimum(g);
    }
    
    console.log(result);
    return result;
};

