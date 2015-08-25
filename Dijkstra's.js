/*
function Dijkstra(Graph, source):
  dist[source] ← 0                       // Distance from source to source
       prev[source] ← undefined               // Previous node in optimal path initialization
      create vertex set Q

      for each vertex v in Graph:             // Initialization
          if v ≠ source:                      // v has not yet been removed from Q (unvisited nodes)
              dist[v] ← INFINITY             // Unknown distance from source to v
             prev[v] ← UNDEFINED            // Previous node in optimal path from source
          add v to Q                          // All nodes initially in Q (unvisited nodes)
      
      while Q is not empty:
          u ← vertex in Q with min dist[u]    // Source node in the first case
          remove u from Q 
          
          for each neighbor v of u:           // where v is still in Q.
              alt ← dist[u] + length(u, v)
              if alt < dist[v]:               // A shorter path to v has been found
                 dist[v] ← alt 
                  prev[v] ← u 

      return dist[], prev[]
      
      
  Using a priority queue
  function Dijkstra(Graph, source):
      dist[source] ← 0                                    // Initialization

      create vertex set Q

      for each vertex v in Graph:           
          if v ≠ source
              dist[v] ← INFINITY                          // Unknown distance from source to v
              prev[v] ← UNDEFINED                         // Predecessor of v

         Q.add_with_priority(v, dist[v])


      while Q is not empty:                              // The main loop
         u ← Q.extract_min()                            // Remove and return best vertex
         for each neighbor v of u:                       // only v that is still in Q
             alt = dist[u] + length(u, v) 
             if alt < dist[v]
                 dist[v] ← alt
                 prev[v] ← u
                 Q.decrease_priority(v, alt)

     return dist[], prev[]
*/
