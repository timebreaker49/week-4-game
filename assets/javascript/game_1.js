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

var enemyId = -1;

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
$('#fighters').on('click', function(event) {
	// characterClicked = true;
	var id = event.target.id;
	for (var i=defaultCharacters.length-1; i>=0; i--) {
    	if (defaultCharacters[i] === sora) {
    		yourCharacter = i;
        	defaultCharacters.splice(i, 1);
        	// break;       //<-- Uncomment  if only the first term has to be removed
    	}
    	// if (defaultCharacters[i] === cloud) {
    	// 	yourCharacter = i;
     //    	defaultCharacters.splice(i, 1);
     //    	// break;       //<-- Uncomment  if only the first term has to be removed
    	// }
	}
	enemiesAvailable = defaultCharacters.slice();
	console.log(enemiesAvailable);
	// yourCharacter = sora.value;
	$('#enemies').append(enemiesAvailable);
	// enemiesAvailable.push(cloud, mickey, sephiroth);
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

$('#enemies').on('click', function(event) {

	console.log(enemiesAvailable);
	enemyId = event.target.id;
	var enemy = setEnemy(enemyId);
	for (var i=enemiesAvailable.length-1; i>=0; i--) {
    	if (enemiesAvailable[i] === enemy) {
    		// enemyDefender = i;
        	enemiesAvailable.splice(i, 1);

			$('#defender').empty();
        	$('#defender').append(enemy);
        	$('#enemies').append(enemiesAvailable);

        	console.log(enemy);
        	console.log(enemiesAvailable);
        	// break;       //<-- Uncomment  if only the first term has to be removed
    	}
	}

	// for (var i = 0; i < enemiesAvailable.length; i++) {
	// 	enemiesAvailable[i]
	// }
	// enemyDefender = this.value;

});

function setEnemy(enemyId) {
	var enemy;
	switch(enemyId) {
		case 'sora':
			enemy = sora;
			break;
		case 'cloud':
			enemy = cloud;
			break;
		case 'mickey':
			enemy = mickey;
			break;
		case 'sephiroth':
			enemy = sephiroth;
			break;
		default:
			console.log(enemyId);
	}
	return enemy;

}


});



















