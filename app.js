let cells = document.querySelectorAll('.row > div');
const resetButton = document.getElementById("reset");
console.log(cells);

resetButton.addEventListener("click", function(){
   location.reload();
})


const resetDiv = document.querySelector('.reset');

for (let i = 0; i < cells.length; i++) {
   cells[i].addEventListener('click', cellClicked);
}

let onlyPlayer = 'X';
let gameOver = false;
let turnCounter = 0;

function cellClicked(event) {

   if (gameOver) {
      return;
   }

   event.target.textContent = onlyPlayer;
   turnCounter++;

   theWinner();

   nextPlayer();

}

console.log(cells);

function nextPlayer() {
   if (onlyPlayer == 'X') {
      onlyPlayer = 'O';
   } else {
      onlyPlayer = 'X';
   }
}


function theWinner() {
   if (cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') {
      gameOver = true;
      console.log('X WINS!');
   }
   else if (cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O') {
      gameOver = true;
      console.log('O WINS');
   }
   else if (cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X') {
      gameOver = true;
      console.log('X WINS');
   }
   else if (cells[3].textContent == 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O') {
      gameOver = true;
      console.log('O WINS');
   }
   else if (cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X') {
      gameOver = true;
      console.log('X WINS');
   }
   else if (cells[6].textContent == 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O') {
      gameOver = true;
      console.log('O WINS');
   }
   else if (cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X') {
      gameOver = true;
      console.log('X WINS');
   }
   else if (cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O') {
      gameOver = true;
      console.log('O WINS');
   }
   else if (cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X') {
      gameOver = true;
      console.log('X WINS');
   }
   else if (cells[2].textContent == 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O') {
      gameOver = true;
      console.log('O WINS');
   }
   else if (cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X') {
      gameOver = true;
      console.log('X WINS');
   }
   else if (cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O') {
      gameOver = true;
      console.log('O WINS');
   }
   else if (turnCounter == 9) {
      gameOver = true;
      console.log('DRAW')
      
   }
};
