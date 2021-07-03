const MemoryGame = require("./memory");

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });


  // Bind the click event of each element to a function
    // attempt with toggle
    //attempt with .forEach

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener ('click', () => {
      card.classList.toggle('turned');
      
      MemoryGame.pairsClicked ++;
      MemoryGame.pickedCards.push(card); // adds a card to be later checked when 2 cards conditional met

      if (MemoryGame.pickedCards.length === 2 && MemoryGame.checkIfPair() === true) {
        MemoryGame.pairsGuessed ++; 
        MemoryGame.pickedCards.pop() // so that pickedCards is always back to zero before next pair chosen
        MemoryGame.pickedCards.pop()

      } else if (MemoryGame.pickedCards.length === 2 && MemoryGame.checkIfPair() === false) {
        card.classList.toggle('turned'); // to remove class turned and flip them back to normal
        MemoryGame.pickedCards.pop() // so that pickedCards is always back to zero before next pair chosen
        MemoryGame.pickedCards.pop()
      }
    
      MemoryGame.checkIfFinished()
      
      console.log(`Card clicked: ${card}`);
    });
  });


});
