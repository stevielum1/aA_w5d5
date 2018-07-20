class Board {

constructor() {
this.grid = [[null, null, null], [null, null, null], [null, null, null]];
}

empty(pos) {
  if (this.grid[pos[0]][pos[1]] === null) {
    return true;
  }
  return false;
}
}
