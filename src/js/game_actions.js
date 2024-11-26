export default class gameActions {
  constructor({ htmlTable, gameTable, gameScore }) {
    this.htmlTable = htmlTable;
    this.gameTable = gameTable;
    this.gameScore = gameScore;

    this.missed = this.gameScore.missed.bind(this.gameScore);
    this.success = this.gameScore.success.bind(this.gameScore);
    this.endGame = this.gameScore.endGame.bind(this.gameScore);
  }

  traceClick() {
    this.htmlTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("has_goblin")) {
        this.success();
        this.gameTable.clearCell();
      } else {
        this.missed();
      }

      this.endGame();
    });
  }
}
