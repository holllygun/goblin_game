import Game from "../game";

test("new Table", () => {
  const correct = {
    table: null,
    totalCells: 16,
    activeCell: null,
    previousCellId: null,
    timer: null,
  };
  const newGame = new Game("gameTable");

  expect(newGame).toEqual(correct);
});
