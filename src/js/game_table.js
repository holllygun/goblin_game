export default class gameTable {
  constructor(size) {
    this.size = size;
    this.activeCell = null;
    this.previousCellId = null;
    this.timer = null;
  }

  generateTable() {
    const div = document.createElement("div");
    div.classList.add("game_container");
    document.querySelector(".wrapper").appendChild(div);

    const htmlTable = document.createElement("table");
    htmlTable.classList.add("gametable");
    htmlTable.setAttribute("id", "gameTable");
    div.appendChild(htmlTable);

    let cellId = 1;

    for (let x = 0; x < this.size; x++) {
      const tr = document.createElement("tr");

      for (let y = 0; y < this.size; y++) {
        const td = document.createElement("td");
        td.classList.add("table_cell");
        tr.classList.add("table_column");
        td.setAttribute("id", `cell_${cellId}`);
        tr.appendChild(td);
        cellId++;
      }
      htmlTable.appendChild(tr);
    }
  }

  activateRandomCell() {
    let randomId;

    do {
      randomId = `cell_${Math.floor(1 + Math.random() * this.size ** 2)}`;
    } while (randomId === this.previousCellId);
    const cell = document.getElementById(randomId);

    cell.classList.add("has_goblin");

    this.activeCell = cell;
    this.previousCellId = randomId;
  }

  clearCell() {
    if (this.activeCell) {
      this.activeCell.classList.remove("has_goblin");
      this.activeCell = null;
    }
  }

  changeCell() {
    this.timer = setInterval(() => {
      this.clearCell();
      this.activateRandomCell();
    }, 1000);
  }
}
