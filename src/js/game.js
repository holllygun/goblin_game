export default class Game {
  constructor(tableId) {
    this.table = document.getElementById(tableId);
    this.totalCells = 16;
    this.activeCell = null;
    this.previousCellId = null;
    this.timer = null;
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.generateTable();
      this.activateRandomCell();
      this.changeCell();
    });
  }

  generateTable() {
    const div = document.createElement("div");
    div.classList.add("game_container");
    document.querySelector("body").appendChild(div);

    const table = document.createElement("table");
    table.classList.add("gametable");
    table.setAttribute("id", "gameTable");
    div.appendChild(table);

    let cellId = 1;

    for (let x = 0; x < 4; x++) {
      const tr = document.createElement("tr");

      for (let y = 0; y < 4; y++) {
        const td = document.createElement("td");
        td.classList.add("table_cell");
        tr.classList.add("table_column");
        td.setAttribute("id", `cell_${cellId}`);
        tr.appendChild(td);
        cellId++;
      }
      table.appendChild(tr);
    }
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
