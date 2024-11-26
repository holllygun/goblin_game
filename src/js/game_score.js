export default class gameScore {
  constructor() {
    this.hitCounter = 0;
    this.missingCounter = 0;
  }

  success() {
    let winnerText = document.querySelector(".winner");
    this.hitCounter += 1;
    document.querySelector(".hit_counter").textContent = this.hitCounter;

    if (this.hitCounter === 4) {
      winnerText.classList.remove("hidden");

      setTimeout(() => {
        winnerText.classList.add("hidden");
      }, 3000);
    }
  }

  missed() {
    let loserText = document.querySelector(".loser");
    this.missingCounter += 1;
    document.querySelector(".missing_counter").textContent =
      this.missingCounter;

    if (this.missingCounter === 4) {
      loserText.classList.remove("hidden");

      setTimeout(() => {
        loserText.classList.add("hidden");
      }, 3000);
    }
  }

  endGame() {
    if (this.hitCounter === 5 || this.missingCounter === 5) {
      document.querySelector(".missing_counter").textContent =
        this.missingCounter;
      document.querySelector(".hit_counter").textContent = this.hitCounter;
      setTimeout(() => {
        alert(this.hitCounter === 5 ? "winner!!!" : "loser!!!");
        this.hitCounter = 0;
        this.missingCounter = 0;
        document.querySelector(".missing_counter").textContent = 0;
        document.querySelector(".hit_counter").textContent = 0;
      }, 1000);
    }
  }
}
