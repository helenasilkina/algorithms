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
        this.nodes.push(node);
        this.nodeMap[node] = this.nodes.length-1;
        this.edges[node] = [];
    };
    
    this.addEdge = function(source, sink, capacity) {
        this.edges[source].push(new Edge(source, sink, capacity));
        this.edges[sink].push(new Edge(sink, source, capacity));
    };
    
    this.edgeExists = function(source, sink) {
        if (this.edges[source]) {
           this.edges[source].forEach(function(edge, i, array) {
                if (edge.sink == sink) {
                    return edge;
                }   
           });
        }
        return null;
    };
};
function Prim(graph) {
    var result = [],
        usedNodes = {};

    function findMinimum(graph) {
        var minimum = [Infinity, null],
        edges = graph.edges;

        edges.forEach(function(edge, i, edges) {
            edge.forEach(function(property, index, edge) {
                if ((property.capacity < minimum[0]) && !usedNodes[property.sink]) {
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
    while (minimum != null) {
        result.push(minimum);
        usedNodes[minimum] = true;
        minimum = findMinimum(g);
    }
    
    return result;
};

