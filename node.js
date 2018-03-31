class node {
  constructor(i, j, col) {
    this.i = i ;
    this.j = j ;
    this.x = j * w ;
    this.y = i * w ;
    this.obstacle = false ;
    this.col = col || color(100, 150, 255) ;
    this.neighbors = [] ;
    this.hasChanged = false ;
    this.visited = false ;
    this.isPath = false ;
    this.cost = 0 ;
  }

  show(c) {
    if(c) {
      fill(c) ;
    } else if(this.isPath) {
      fill(color(100, 255, 50)) ;
    } else if(this.obstacle) {
      fill(0) ;
    } else if(this.visited) {
      fill(255, 0, 0) ;
    } else {
      fill(this.col) ;
    }
    stroke(0) ;
    textAlign(CENTER, CENTER) ;
    rect(this.x, this.y, w, w) ;
    if(this.cost !== undefined) {
      fill(0) ;
      textSize(16) ;
    //  text(this.cost, this.x + w/2, this.y + w/2) ;
    }
  }
}
