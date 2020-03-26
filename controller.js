/* document
  .getElementById("memoryGame")
  .addEventListener("click", function(event) {
    const selectedCard = event.target.className;

    if (selectedCard === "card-container") {
      event.target.firstElementChild.classList.remove("dp-hidden");

      clickCount++;

      if (clickCount == 1) {
        firstClickValue = event.target.firstElementChild.textContent;
        firstClickedElement = event.target.firstElementChild;
      } else if (clickCount == 2) {
        secondClickValue = event.target.firstElementChild.textContent;
      }

      if (secondClickValue !== undefined) {
        if (firstClickValue != secondClickValue) {
          setTimeout(() => {
            firstClickedElement.classList.add("dp-hidden");
            event.target.firstElementChild.classList.add("dp-hidden");
            resetValues();
          }, 2000);
        }
        else{
            resetValues();
        }
      }
    }
  }); */

/* function resetValues() {
  clicksMade = 0;
  clickCount = 0;
  firstClickValue = undefined;
  firstClickedElement = undefined;
  secondClickValue = undefined;
} */

class GameController {
  constructor(modal, view) {
    this.modal = modal;
    this.view = view;
  }
  startGame() {
    this.view.renderCards(this.modal.getCardValues());
    this.addListener();
  }

  addListener() {
    const self = this;
    document.getElementById(this.view.playerContainer).addEventListener("click", function(event) {
        const selectedCard = event.target.className;

        if (selectedCard === "card-container") {
          event.target.firstElementChild.classList.remove("dp-hidden");

          let clicksMade = self.modal.getClickCount();
          clicksMade++;
          let clickCount = self.modal.setClickCount(clicksMade);

          let firstClickValue = self.modal.getFirstClickValue();
          let firstClickedElement = self.modal.getFirstClickedElement();
          let secondClickValue = self.modal.getSecondClickValue();

          if (clickCount == 1) {
            //firstClickValue = event.target.firstElementChild.textContent;
            firstClickValue = event.target.firstElementChild.getAttribute("data");
            self.modal.setFirstClickValue(firstClickValue);

            firstClickedElement = event.target.firstElementChild;
            self.modal.setFirstClickedElement(firstClickedElement);
          } else if (clickCount == 2) {
            //secondClickValue = event.target.firstElementChild.textContent;
            secondClickValue = event.target.firstElementChild.getAttribute("data");
            self.modal.setSecondClickValue(secondClickValue);
          }

          if (secondClickValue !== undefined) {
            if (firstClickValue != secondClickValue) {
              setTimeout(() => {
                firstClickedElement.classList.add("dp-hidden");
                event.target.firstElementChild.classList.add("dp-hidden");
                self.modal.resetValues();
              }, 2000);
            } else {
              self.modal.resetValues();
            }
          }
        }
      });
  }
}
