let game = new Game();
if (window.location.pathname.substr(window.location.pathname.lastIndexOf('/')) == '/play.html'){
  game.board.nextPlayer(); // Start game
}
