//renderCards(cardValues);

//player1
/* const player1 = [1, 3, 1, 3];
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
memoryGame2.startGame(); */

//player3 with image
const imageCards = [
  {
    value: 1,
    image: "images/boy1.png"
  },
  {
    value: 2,
    image: "images/girl1.png"
  },
  {
    value: 1,
    image: "images/boy12.png"
  },
  {
    value: 2,
    image: "images/girl12.png"
  }    
];
const modal3 = new Modal(imageCards);

const player3Container = "memoryGame3";
const view3 = new View(player3Container);

let memoryGame3 = new GameController(modal3, view3);
memoryGame3.startGame();