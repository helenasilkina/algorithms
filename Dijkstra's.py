
function Dijkstra(Graph, source):
  // Distance from source to source
  // Previous node in optimal path initialization
  dist[source] ← 0                       
      prev[source] ← undefined               
      create vertex set Q

      for each vertex v in Graph:
        if v ≠ source:                     
             dist[v] ← INFINITY          
             prev[v] ← UNDEFINED
          add v to Q                        
      
      while Q is not empty:
          u ← vertex in Q with min dist[u]   
          remove u from Q 
          
          for each neighbor v of u:     
              alt ← dist[u] + length(u, v)
              if alt < dist[v]:
                 dist[v] ← alt 
                 prev[v] ← u 

      return dist[], prev[]
      
      
  Using a priority queue
  function Dijkstra(Graph, source):
      dist[source] ← 0   

      create vertex set Q

      for each vertex v in Graph:           
          if v ≠ source
              dist[v] ← INFINITY 
              prev[v] ← UNDEFINED    

         Q.add_with_priority(v, dist[v])


      while Q is not empty:                              
         u ← Q.extract_min()                           
         for each neighbor v of u:                 
             alt = dist[u] + length(u, v) 
             if alt < dist[v]
                 dist[v] ← alt
                 prev[v] ← u
                 Q.decrease_priority(v, alt)

     return dist[], prev[]
