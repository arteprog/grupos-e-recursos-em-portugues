// Grid for p5js
// version 1.0.1

function Grid(cellNumber,gap) {
  this.cellNumber = cellNumber;
  this.gap = gap;
  this.width = (width-((this.cellNumber-1)*this.gap))/this.cellNumber;
  this.cells = [];
  for (let i = 0; i < this.cellNumber; i++) {
    this.cells[i] = [];
  }
  
  
  this.show = function() {
    for (let j = 0; j < this.cellNumber; j++) {
      let heightPointer = 0;      
      for (let i = 0; i < this.cells[j].length; i++) {
        if (heightPointer + this.cells[j][i].height() < height) {
          push();
          translate(this.cellPosition(j),heightPointer);
          heightPointer += this.cells[j][i].height();    
          this.cells[j][i].show();
          pop();
        }
      }    
    }
    
  }
  
  this.stack = function(n, elem) {
    this.cells[n].push(elem);    
  }
  
  this.cellPosition = function(n) {
    return this.width*n+this.gap*n;
  }
  
}