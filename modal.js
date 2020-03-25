/* const cardValues = [1,2,3,4,5,6,1,2,3,4,5,6];
let clickCount = 0, firstClickValue, secondClickValue,firstClickedElement; */

class Modal {
  constructor(player1) {
    //this.cardValues = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    this.cardValues = player1;
    this.clickCount = 0;
    this.firstClickValue;
    this.secondClickValue;
    this.firstClickedElement;
  }

  getCardValues() {
    //return this.cardValues;
    return this.shuffleArray();
  }

  getClickCount() {
    return this.clickCount;
  }

  setClickCount(count) {
    this.clickCount = count;
    return this.clickCount;
  }

  getFirstClickValue() {
    return this.firstClickValue;
  }

  setFirstClickValue(firstClickedValue) {
    this.firstClickValue = firstClickedValue;
    return this.firstClickValue;
  }

  getSecondClickValue() {
    return this.secondlickValue;
  }

  setSecondClickValue(SecondClickedValue) {
    this.secondClickValue = SecondClickedValue;
    return this.secondClickValue;
  }

  getFirstClickedElement() {
    return this.firstClickedElement;
  }

  setFirstClickedElement(firstClickedElementName) {
    this.firstClickedElement = firstClickedElementName;
    return this.firstClickedElement;
  }

  resetValues() {
    this.clickCount = 0;
    this.firstClickValue = undefined;
    this.secondClickValue = undefined;
    this.firstClickedElement = undefined;
  }

  shuffleArray() {
    let shuffleArrayValues = this.cardValues;
    let a = 0,
      b = 0;
    for (var i = 0; i <= shuffleArrayValues.length - 1; i++) {
      a = Math.floor(Math.random() * shuffleArrayValues.length);
      b = shuffleArrayValues[i];
      [shuffleArrayValues[a], shuffleArrayValues[b]] = [shuffleArrayValues[b],shuffleArrayValues[a]];
    }
    return shuffleArrayValues;
  }
}
