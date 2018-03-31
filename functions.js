function removeFrom(arr, elt) {
  for(let i = 0 ; i < arr.length ; i++) {
    if(elt == arr[i]) {
      arr.splice(i, 1) ;
      return ;
    }
  }
}

function initGrid() {
  grid = new Array(rows) ;
  for(let i = 0 ; i < rows ; i++) {
    grid[i] = new Array(cols) ;
    for(let j = 0 ; j < cols ; j++) {
      grid[i][j] = new node(i, j) ;
    }
  }
  for(let i = 0 ; i < rows ; i++) {
    for(let j = 0 ; j < cols ; j++) {
      grid[i][j].neighbors = getNeighbors(i, j) ;
    }
  }
}

let allowNeighbors = false ;

function getNeighbors(i, j) {
  let res = [] ;
  if(i > 0) {
    res.push(grid[i - 1][j]) ;
  }
  if(j > 0) {
    res.push(grid[i][j - 1]) ;
  }
  if(i < rows - 1) {
    res.push(grid[i + 1][j]) ;
  }
  if(j < cols - 1) {
    res.push(grid[i][j + 1]) ;
  }
  /*
  if(i > 0 && j > 0) {
    res.push(grid[i - 1][j - 1]) ;
  }
  if(i > 0 && j < cols - 1) {
    res.push(grid[i - 1][j + 1]) ;
  }
  if(i < rows - 1 && j > 0) {
    res.push(grid[i + 1][j - 1]) ;
  }
  if(i < rows - 1 && j < cols - 1) {
    res.push(grid[i + 1][j + 1]) ;
  }
  */
  return res ;
}


function renderGrid() {
  for(let i = 0 ; i < rows ; i++) {
    for(let j = 0 ; j < cols ; j++) {
      grid[i][j].show() ;
    }
  }
}

let changedCells = [] ;

function makeObstacles() {
  if(mouseIsPressed) {
    let x = mouseX ;
    let y = mouseY ;
    x /= w ;
    y /= w ;
    x = floor(x) ;
    y = floor(y) ;
    if(x < 0 || y < 0) {
      return ;
    }
    if(x > rows - 1 || y > cols - 1) {
      return ;
    }

    if(!grid[y][x].hasChanged) {
      grid[y][x].obstacle = !grid[y][x].obstacle ;
      grid[y][x].hasChanged = true ;
      changedCells.push(grid[y][x]) ;
      grid[y][x].show() ;
    }
  } else {
    if(changedCells.length > 0) {
      for(let i = 0 ; i < changedCells.length ; i++) {
        changedCells[i].hasChanged = false ;
      }
      changedCells = [] ;
    }
  }
}

let path = [] ;

function getPath() {
  let res = [end] ;
  let q = [] ;
  q.push(end) ;
  while(q.length > 0) {
    let curr = q[0] ;
    q.splice(0, 1) ;
    for(neighbor of curr.neighbors) {
      if(neighbor.cost == curr.cost - 1) {
        q.push(neighbor) ;
        res.push(neighbor) ;
        break ;
      }
    }
  }
  return res ;
}

function showPath() {
  path[pathIndex].isPath = true ;
  path[path.length - pathIndex - 1].isPath = true ;
  path[pathIndex].show() ;
  path[path.length - pathIndex - 1].show() ;
}

let solveButton ;

function slv() {
  solve = true ;
}

function isInArray(elt, arr) {
  for(el of arr) {
    if(el == elt) {
      return true ;
    }
  }
  return false ;
}

function genob(k) {
  if(!k) k = 1 ;
  if(typeof k !== "number") {
    k = 1 ;
  }
  for(let x = 0 ; x < k ; x++) {
    for(let i = 0 ; i < rows ; i++) {
      for(let j = 0 ; j < cols ; j++) {
        if(random(1) < 0.075 && grid[i][j] != start && grid[i][j] != end) {
          grid[i][j].obstacle = true ;
          grid[i][j].show() ;
        }
      }
    }
  }
}
