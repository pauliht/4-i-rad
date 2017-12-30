let game = new Game();
var url = window.location.pathname
if (url.substr(url.lastIndexOf('/')) == '/play.html'){
  game.board.nextPlayer(); // Start game
}
