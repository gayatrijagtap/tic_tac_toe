const { playBot,getUserMove,getPlayerDetails,makeUserMove,makeBotMove,welcomePlayer,allocateBotSymbol,isSubset,isValidMove } = require('./util.js');

const displayBoard = function(boardDetails) {
  console.log("\n\n "+boardDetails[1]+" | "+boardDetails[2]+" | "+boardDetails[3]);
  console.log("---+---+---");
  console.log(" "+boardDetails[4]+" | "+boardDetails[5]+" | "+boardDetails[6]);
  console.log("---+---+---");
  console.log(" "+boardDetails[7]+" | "+boardDetails[8]+" | "+boardDetails[9]+"\n\n");
}

let winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

const hasWon = function(gameDetails) {
  for(let combination of winningCombinations) {
    if(isSubset(gameDetails.moves,combination)) {
      console.log(gameDetails.name+" has WON!!");
      process.exit();
    }
  }
}

const startGame = function( gameDetails ) {
  let initialBoard = { 1:'1' , 2:'2' , 3:'3' , 4:'4' , 5:'5' , 6:'6' , 7:'7' , 8:'8' , 9:'9' };
  gameDetails.board = initialBoard;
  console.clear();
  displayBoard( gameDetails.board );
  gameDetails.remainingMoves = [1,2,3,4,5,6,7,8,9];
  playNow(gameDetails);
}

const playNow = function(gameDetails) {
  let totalMoves = gameDetails.firstPlayer.moves.concat(gameDetails.secondPlayer.moves);
  let remainingAttempts = 9;
  while(remainingAttempts >= 1) {
    console.log(gameDetails.firstPlayer.name+"'s turn\n");
    let userMove = getUserMove(gameDetails.firstPlayer.name);
    if(!isValidMove(totalMoves,userMove) || (!gameDetails.remainingMoves.includes( userMove ))) {
      console.log('invalid box!! Please choose appropriate box');
    } else {
      gameDetails = makeUserMove(gameDetails,userMove)
      console.clear();
      displayBoard(gameDetails.board);
      hasWon(gameDetails.firstPlayer);
      remainingAttempts--;
      if(remainingAttempts == 0) {
        console.log('Match Draw!!');
        process.exit();
      }
      let botMove = playBot(gameDetails.remainingMoves);
      gameDetails = makeBotMove(gameDetails,botMove);
      console.log("bot's turn\n")
      console.log("bot's move : "+botMove);
      displayBoard(gameDetails.board);
      hasWon(gameDetails.secondPlayer);
      remainingAttempts--;
    }
  }
}

exports.startGame = startGame;
