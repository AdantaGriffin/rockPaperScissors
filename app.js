console.log('hi');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error');
  }
}
//This first function take user input and uniforms it to lowercase. if user doest select one of the three input allowed a error message will come up.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
      break;
  }
}
//This second function creates a whole random number between 0-2 and gives those numbers a choice to call.
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'This game is a tie';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer Won!';
    } else {
      return 'You Won!'
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer Won!';
    } else {
      return 'You Won!'
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer Won!';
    } else {
      return 'You Won!';
    }
  }
  if(userChoice === 'bomb') {
    return 'You Won!'
  }
};
//This third function resolves a winner between the option the user chooses and the random option provided by computer.
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};
//The play game funtion puts all the function together in order to produce an outcome.
playGame();



