(function () {
    //IIFE logic here 
})();

 $(document).ready(function() {

var defaultCharacters = [sora, cloud, mickey, sephiroth];
var sora = $('#sora');
var cloud = $('#cloud');
var mickey = $('#mickey');
var sephiroth = $('#sephiroth');
var yourCharacter;
var enemiesAvailable = [];
var enemyDefender;
var characterClicked = false;




$('.characters').on('click', function() {

	console.log('click event');
	characterClicked = true;
	
//once a character is clicked, it should relocate to the 
//player charater class, else should go to enemies class
	if (characterClicked) {
		$('.characters').clone().appendTo('.enemies');
		} else {
			console.log('do something with your life')
		}

})











 })

