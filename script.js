const choices = ['Rock', 'Paper', 'Scissors'];
const music = new Audio('https://files.catbox.moe/8wwcyx.mp3');
music.loop = true;
music.volume = 0.3;
music.play();

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(playerChoice, computerChoice);

    document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
    document.getElementById('outcome').textContent = result;

    playSound(result);
  });
});

function getResult(player, computer) {
  if (player === computer) return 'It\'s a Tie!';
  if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Paper' && computer === 'Rock') ||
    (player === 'Scissors' && computer === 'Paper')
  ) {
    return 'You Win!';
  } else {
    return 'You Lose!';
  }
}

function playSound(result) {
  const win = new Audio('https://files.catbox.moe/9yjcwh.mp3');
  const lose = new Audio('https://files.catbox.moe/edmp0e.mp3');
  const tie = new Audio('https://files.catbox.moe/v9l73m.mp3');

  if (result === 'You Win!') win.play();
  else if (result === 'You Lose!') lose.play();
  else tie.play();
}
