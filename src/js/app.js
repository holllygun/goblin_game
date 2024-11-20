class Game {
  constructor(tableId) {
    this.table = document.getElementById(tableId);
    this.totalCells = 16;
    this.activeCell = null;
    this.previousCellId = null;
    this.timer = null;
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.activateRandomCell();
      this.changeCell();
    });
  }

  activateRandomCell() {
    let randomId;

    do {
      randomId = `cell_${Math.floor(1 + Math.random() * this.totalCells)}`;
    } while (randomId === this.previousCellId);
    const cell = document.getElementById(randomId);
    cell.classList.add("has_goblin");
    this.activeCell = cell;
    this.previousCellId = randomId;
  }

  clearCell() {
    if (this.activeCell) {
      this.activeCell.classList.remove("has_goblin");
    }
  }

  changeCell() {
    this.timer = setInterval(() => {
      this.clearCell();
      this.activateRandomCell();
    }, 1000);
  }
}

const game = new Game("gameTable");
game.init();
