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

const isValidMove = function(totalMoves,userMove) {
  return (!totalMoves.includes(userMove));
}

const makeUserMove = function(gameDetails,userMove){
  gameDetails.board[userMove] = gameDetails.firstPlayer.symbol;
  gameDetails.firstPlayer.moves.push(userMove);
  gameDetails.board = gameDetails.board;
  let index = gameDetails.remainingMoves.indexOf(userMove);
  gameDetails.remainingMoves.splice(index,1);
  return gameDetails;
}

const makeBotMove = function(gameDetails,botMove) {
  gameDetails.board[botMove] = gameDetails.secondPlayer.symbol;
  gameDetails.secondPlayer.moves.push(botMove);
  gameDetails.board = gameDetails.board;
  return gameDetails;
}

module.exports = { allocateBotSymbol,isSubset,isValidMove };
