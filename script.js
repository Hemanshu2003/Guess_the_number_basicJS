'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

const displayMessages = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '👾No Number!!';
    displayMessages('👾No Number!!');
  }
  // when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!!';

    displayMessages('🎉 Correct Number!!');

    document.querySelector('body').style.backgroundColor = 'yellowgreen';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '🔺 Guess is Too High' : '🔻 Guess is Too Low';
      displayMessages(
        guess > secretNumber ? '🔺 Guess is Too High' : '🔻 Guess is Too Low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '🥶 You Lost The Game!!';

      displayMessages('🥶 You Lost The Game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again - reset button
document.querySelector('.again').addEventListener('click', function () {
  // reset number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // reset message
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessages('Start guessing...');
  //reset score
  document.querySelector('.score').textContent = 20;

  //reset background color and width
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'rgb(44, 0, 124)';
});
