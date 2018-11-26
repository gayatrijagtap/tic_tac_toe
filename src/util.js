const read = require('readline-sync');

getPlayerDetails = function() {
  let gameDetails = { firstPlayer : {} , secondPlayer : {} };
  gameDetails.firstPlayer.name = enterName(); 
  gameDetails.firstPlayer.symbol = enterSymbol();
  gameDetails.firstPlayer.moves = [];
  gameDetails.secondPlayer.name = 'bot';
  gameDetails.secondPlayer.symbol = allocateBotSymbol(gameDetails.firstPlayer.symbol);
  gameDetails.secondPlayer.moves = [];
  return gameDetails;
}

const enterName = function() {
  let name = read.question('Enter name : ');
  while(!name) {
    name = read.question('Please enter name : ');
  }
  return name;
}

const enterSymbol = function() {
  let symbol = read.question('\nchoose symbol "O" or "X" : ');
  while(!['O','X'].includes(symbol)) {
    symbol = read.question('\nIncorrect symbol!! please choose symbol "O" or "X" : ');
  }
  return symbol;
}

const allocateBotSymbol = function(playerSymbol) {
  let symbols = ['O','X'];
  let index = symbols.indexOf(playerSymbol);
  symbols = symbols.reverse();
  return symbols[index];
}

const isSubset = function(superset,subset) {
  return subset.every( element => superset.includes(element) );
}

module.exports = { allocateBotSymbol,isSubset };
