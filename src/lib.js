const { makeUserMove,makeBotMove,allocateBotSymbol,getPlayerDetails,getUserMove,isValidMove,playBot,hasWon } = require('./util.js');

const displayBoard = function(boardDetails) {
  console.log("\n\n "+boardDetails[1]+" | "+boardDetails[2]+" | "+boardDetails[3]);
  console.log("---+---+---");
  console.log(" "+boardDetails[4]+" | "+boardDetails[5]+" | "+boardDetails[6]);
  console.log("---+---+---");
  console.log(" "+boardDetails[7]+" | "+boardDetails[8]+" | "+boardDetails[9]+"\n\n");
}
