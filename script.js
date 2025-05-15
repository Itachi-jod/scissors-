function play(player) {
  const choices = ['rock', 'paper', 'scissors'];
  const computer = choices[Math.floor(Math.random() * 3)];

  document.getElementById('player-choice').textContent = `You chose: ${capitalize(player)}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${capitalize(computer)}`;

  let winner = '';

  if (player === computer) {
    winner = "It's a Draw!";
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    winner = 'You Win!';
  } else {
    winner = 'Computer Wins!';
  }

  document.getElementById('winner').textContent = winner;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
