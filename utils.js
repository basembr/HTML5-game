window.requestAnimFrame = (function(callback) {
	return window.requestAnimationFrame ||
		   window.webkitRequestAnimationFrame ||
		   window.mozRequestAnimationFrame ||
		   window.oRequestAnimationFrame ||
		   window.msRequestAnimationFrame ||
		   function(callback) {
		      window.setTimeout(callback, 1000 / 60);
		   };
})();

window.addEventListener('load', function() {
  StartGame();
}, true);

function Game() {
	// ... cose definite nella lezione precedente
	this.GameLoop = function() {
		if(!this.paused) {
			// aggiorna tutti gli oggetti
			this.Update();
		}
		//disegna l'intera scena a schermo
		this.Draw();
		window.requestAnimFrame(function() {
			// rilancia la funzione GameLoop ad ogni frame
			game.GameLoop();
		});
	}
}