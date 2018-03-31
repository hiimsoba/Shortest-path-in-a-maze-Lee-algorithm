function lee() {
  if(queue.length > 0) {
    let curr = queue[0] ;
    curr.visited = true ;
    curr.show() ;
    if(curr == end) {
      console.log("DONE!") ;
      found = true ;
    }
    queue.splice(0, 1) ;
    for(neighbor of curr.neighbors) {
      if(!neighbor.visited && !neighbor.obstacle) {
        neighbor.visited = true ;
        queue.push(neighbor) ;
        neighbor.cost = curr.cost + 1 ;
      }
    }
  } else {
    solve = false ;
    if(!found) {
      console.log("finished, no results") ;
    } else {
      path = getPath() ;
    }
    finished = true ;
  }
}

let found = false ;
let finished = false ;

let queue = [] ;
