const { makeUserMove,makeBotMove,allocateBotSymbol,getPlayerDetails,getUserMove,isValidMove,playBot,hasWon } = require('./util.js');

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
