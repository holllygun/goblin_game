export default class gameScore {
  constructor() {
    this.hitCounter = 0;
    this.missingCounter = 0;
  }

  success() {
    this.hitCounter += 1;
  }

  missed() {
    this.missingCounter += 1;
  }

  endGame() {
    if (this.hitCounter === 5 || this.missingCounter === 5) {
      alert(this.hitCounter === 5 ? "winner!!!" : "loser!!!");
      this.hitCounter = 0;
      this.missingCounter = 0;
    }
  }
}
