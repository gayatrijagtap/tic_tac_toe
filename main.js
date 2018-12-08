const { getPlayerDetails,welcomePlayer } = require('./src/util.js');
const { startGame } = require('./src/lib.js');

const main = function() {
  welcomePlayer();
  let gameDetails = getPlayerDetails();
  startGame(gameDetails);
}

main();
