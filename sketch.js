let grid ;

let start ;
let end ;

let w = 10 ;

let rows ;
let cols ;

let solve = false ;

function setup() {
  createCanvas(601, 601) ;
  rows = floor(height / w) ;
  cols = floor(width / w) ;
  initGrid() ;
  createP("") ;
  solveButton = createButton("Solve!") ;
  solveButton.mousePressed(slv) ;
  obsButton = createButton("Add obstacles!") ;
  obsButton.mousePressed(genob) ;
  start = grid[0][0] ;
  start.cost = 0 ;
  queue.push(start) ;
  end = grid[rows - 1][cols - 1] ;
  //end = grid[floor(random(rows))][floor(random(cols))] ;
  renderGrid() ;
}

let obsButton ;

let pathIndex = 0 ;

function draw() {
  if(!solve) {
    makeObstacles() ;
  } else {
    for(let i = 0 ; i < 10 ; i++) lee() ;
  }
  if(found) {
    if(pathIndex < path.length) {
      showPath() ;
      pathIndex++ ;
    }
  }
}
