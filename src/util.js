const read = require('readline-sync');

getPlayerDetails = function() {
  let playerDetails = { firstPlayer : {} , secondPlayer : {} };
  playerDetails.firstPlayer.name = enterName(); 
  playerDetails.firstPlayer.symbol = enterSymbol();
  playerDetails.firstPlayer.moves = [];
  playerDetails.secondPlayer.name = 'playerBot';
  playerDetails.secondPlayer.symbol = allocateBotSymbol(playerDetails.firstPlayer.symbol);
  playerDetails.secondPlayer.moves = [];
  return playerDetails;
}

const enterName = function() {
  return read.question('Enter name:');
}

const enterSymbol = function() {
  return read.question('Choose symbol "O" or "X":');
}

const allocateBotSymbol = function(playerSymbol) {
  let symbols = ['O','X'];
  let index = symbols.indexOf(playerSymbol);
  symbols = symbols.reverse();
  return symbols[index];
}

module.exports = { allocateBotSymbol };
