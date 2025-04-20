
 const score = {
   wins: 0,
   losses: 0,
   tie: 0
 };

 let computermove = '';

 function pickComputermove() {
   const randomnumber = Math.random();
   if (randomnumber < 1 / 3) {
     computermove = 'Rock';
   } else if (randomnumber < 2 / 3) {
     computermove = 'Paper';
   } else {
     computermove = 'Scissors';
   }
 }

 function playGame(playermove) {
   pickComputermove();
   let result = '';

   if (playermove === 'Paper') {
     if (computermove === 'Paper') result = 'Tie';
     else if (computermove === 'Rock') result = 'You win';
     else result = 'You lose';
   } else if (playermove === 'Scissors') {
     if (computermove === 'Rock') result = 'You lose';
     else if (computermove === 'Paper') result = 'You win';
     else result = 'Tie';
   } else if (playermove === 'Rock') {
     if (computermove === 'Rock') result = 'Tie';
     else if (computermove === 'Paper') result = 'You lose';
     else result = 'You win';
   }

   if (result === 'You win') {
     score.wins += 1;
   } else if (result === 'You lose') {
     score.losses += 1;
   } else {
     score.tie += 1;
   }

   updateScoreboard();

   alert(`You picked ${playermove}. Computer picked ${computermove}. ${result}`);
 }

 function updateScoreboard() {
   document.getElementById('scoreboard').textContent = 
     `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.tie}`;
 }
