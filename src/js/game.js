import gameTable from "./game_table";
import gameScore from "./game_score";
import gameActions from "./game_actions";

export default class Game {
  constructor(tableId, size = 4) {
    this.tableId = tableId;
    this.size = size;
    this.gameScore = new gameScore();
    this.gameActions = null;
    this.gameTable = new gameTable(size);
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      if (!document.querySelector(".game_container")) {
        this.gameTable.generateTable(this.tableId);
      }

      this.gameActions = new gameActions({
        htmlTable: document.getElementById(this.tableId),
        gameTable: this.gameTable,
        gameScore: this.gameScore,
      });

      this.startGame();
    });
  }

  startGame() {
    this.gameTable.activateRandomCell();
    this.gameTable.changeCell();
    this.gameActions.traceClick();
  }
}
