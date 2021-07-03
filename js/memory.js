class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards,
    this.pickedCards = [],
    this.pairsClicked = 0,
    this.pairsGuessed = 0
  }

  shuffleCards() {
 // use randomiser !!!
  }

  //card comparison
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
   // return this.pairsGuessed === this.cards.length /2 ;
   if (this.pairsGuessed === this.cards.length /2) {
     return true;
   } else {
     return false;
   }
  }
}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
