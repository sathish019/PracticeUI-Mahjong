//renderCards(cardValues);

//player1
const player1 = [1, 3, 1, 3];
const modal1 = new Modal(player1);

const player1Container = "memoryGame1";
const view1 = new View(player1Container);

let memoryGame1 = new GameController(modal1, view1);
memoryGame1.startGame();

//player2
const player2 = [1, 3, 2, 2, 1, 3];
const modal2 = new Modal(player2);

const player2Container = "memoryGame2";
const view2 = new View(player2Container);

let memoryGame2 = new GameController(modal2, view2);
memoryGame2.startGame();
