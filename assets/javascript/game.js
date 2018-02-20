(function () {
    //IIFE logic here 
})();

 $(document).ready(function() {

//character objects
var sora = $('#sora');
var cloud = $('#cloud');
var mickey = $('#mickey');
var sephiroth = $('#sephiroth');
var defaultCharacters = [sora, cloud, mickey, sephiroth];
//player character
var yourCharacter = '';
//enemies after the player has chosen their character
var enemiesAvailable = [];
//defender -- chosen from enemiesAvailable 
var enemyDefender = '';
//I forget what I wanted to use this for...
var characterClicked = false;

console.log(defaultCharacters);

// $('.characters').on('click', function() {

// 	yourCharacter += this.value;
// 	console.log(yourCharacter);

// })

//failed loop. I wanted to locate the character that the 
//player selected and then perform actions for the array
// $('.characters').on('click', function () {

// 	for (let i = 0; i < defaultCharacters; i++) {
// 		if (defaultCharacters[i] = "") {
// 			yourCharacter = defaultCharacters[i];
// 			console.log(yourCharacter)
// 			$('.player-character').html(yourCharacter);
// 		} else {
// 			enemiesAvailable.push(defaultCharacters[i] - yourCharacter)
// 			$('.characters').clone().appendTo('.enemies');
// 		}
// 	}
// })




//basic way of selecting the character and moving the rest of the values
$('#sora').on('click', function() {
	characterClicked = true;
	yourCharacter = this.value;
	$('#enemies').append(cloud, mickey, sephiroth);
	enemiesAvailable.push(cloud, mickey, sephiroth);
	return enemiesAvailable;
	});
	console.log(enemiesAvailable);

// $('#cloud').on('click', function() {
// 	characterClicked = true;
// 	yourCharacter = this.value
// 	$('#enemies').append(sora, mickey, sephiroth);
// 	defaultCharacters.splice(yourCharacter);
// 	console.log(defaultCharacters);
// 	console.log(enemiesAvailable);
// 	});

// $('#mickey').on('click', function() {
// 	characterClicked = true;
// 	yourCharacter = this.value
// 	$('#enemies').append(sora, cloud, sephiroth);
// 	defaultCharacters.splice(yourCharacter);
// 	console.log(defaultCharacters);
// 	console.log(enemiesAvailable);
// 	});

// $('#sephiroth').on('click', function() {
// 	characterClicked = true;
// 	yourCharacter = this.value
// 	$('#enemies').append(sora, cloud, mickey);
// 	defaultCharacters.splice(yourCharacter);
// 	console.log(defaultCharacters);
// 	console.log(enemiesAvailable);
// 	});

$('#enemies').on('click', function () {

	console.log(enemiesAvailable);
	var enemyDefender = this.value;
	console.log(enemyDefender);

	// for (var i = 0; i < enemiesAvailable.length; i++) {
	// 	enemiesAvailable[i]
	// }
	// enemyDefender = this.value;

});


});



















