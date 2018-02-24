(function() {
    //IIFE logic here 
})();

$(document).ready(function() {

    $('#audio')[0].play();

    //character objects
    var sora = {
        name: "sora",
        hp: 160,
        defense: 16,
        attack: 12,
        baseAttackPower: 12,
        counterAttackPower : 14,
        id: $('#sora'),
        src: "assets/images/Sora-kh.png"
    };
    var cloud = {
        name: "cloud",
        hp: 150,
        defense: 13,
        attack: 15,
        baseAttackPower: 15,
        counterAttackPower : 15,
        id: $('#sora'),
        src: "assets/images/cloud-kh.png"
    };
    var mickey = {
        name: "mickey",
        hp: 170,
        defense: 13,
        attack: 11,
        baseAttackPower: 11,
        counterAttackPower : 13,
        id: $('#mickey'),
        src: "assets/images/mickey.png"
    };
    var sephiroth = {
        name: "sephiroth",
        hp: 185,
        defense: 12,
        attack: 16,
        baseAttackPower: 16,
        counterAttackPower : 16,
        id: $('#sephiroth'),
        src: "assets/images/Sephiroth_KH.png"
    };
    // var mickey = $('#mickey');
    // var sephiroth = $('#sephiroth');
    var defaultCharacters = [sora, cloud, mickey, sephiroth];
    //player character
    var yourCharacter = [];
    //enemies after the player has chosen their character
    var enemiesAvailable = [];
    //defender -- chosen from enemiesAvailable 
    var enemyDefender = [];
    //I forget what I wanted to use this for...
    var characterClicked = false;

    alertify.alert('And so it begins. Choose your character.');

    console.log(defaultCharacters);

    function renderCharacters() {
        for (var i = 0; i < defaultCharacters.length; i++) {
            var image = $('<img>');
            image.attr('src', defaultCharacters[i].src);
            image.attr('value', defaultCharacters[i].name);
            image.attr('data-number', i);
            image.addClass('characters');
            $('#fighters').append(image);
        }
    }

    renderCharacters();
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




    //on click event for the fighters div
    $('#fighters').on('click', '.characters', function(event) {
        // characterClicked = true;
        console.log($(this).attr('value'));
        var clickedCharacter = $(this).data('number');
        yourCharacter.push(defaultCharacters[clickedCharacter]);
        console.log(clickedCharacter);
        console.log(yourCharacter);
        console.log(defaultCharacters);
        defaultCharacters.splice(clickedCharacter, 1);

        for (var i = 0; i < defaultCharacters.length; i++) {

            enemiesAvailable.push(defaultCharacters[i]);
            console.log(enemiesAvailable);

        }

        $('#fighters').empty();

        function renderEnemies() {
            console.log(enemiesAvailable);
            for (var i = 0; i < enemiesAvailable.length; i++) {
                var image2 = $('<img>');
                image2.attr('src', enemiesAvailable[i].src);
                image2.attr('value', enemiesAvailable[i].name);
                image2.attr('data-number', i);
                image2.addClass('characters');
                $('#enemies').append(image2, enemiesAvailable[i].hp);
            }
        }

        renderEnemies();

        function renderYours() {
            console.log(yourCharacter);
            for (var i = 0; i < yourCharacter.length; i++) {
                var image3 = $('<img>');
                image3.attr('src', yourCharacter[i].src);
                image3.attr('value', yourCharacter[i].name);
                image3.attr('data-number', i);
                image3.addClass('characters');
                $('#fighters').append(image3);
            }
        }

        renderYours();

        alertify.alert('Now choose an opponent.')
    });

    //on click event for the enemies div
    $('#enemies').on('click', '.characters', function(event) {

        console.log($(this).attr('value'));
        var clickedEnemy = $(this).data('number');
        enemyDefender.push(enemiesAvailable[clickedEnemy]);
        console.log(enemyDefender);
        enemiesAvailable.splice(clickedEnemy, 1);
        console.log(enemiesAvailable);

        $('#enemies').empty();

        function renderEnemies() {
            console.log(enemiesAvailable);
            for (var i = 0; i < enemiesAvailable.length; i++) {
                var image2 = $('<img>');
                image2.attr('src', enemiesAvailable[i].src);
                image2.attr('value', enemiesAvailable[i].name);
                image2.attr('data-number', i);
                image2.addClass('characters');
                $('#enemies').append(image2);
            }
        }

        renderEnemies();

        function renderFoe() {
            console.log(enemyDefender);
            for (var i = 0; i < enemyDefender.length; i++) {0
                var image4 = $('<img>');
                image4.attr('src', enemyDefender[i].src);
                image4.attr('value', enemyDefender[i].name);
                image4.attr('data-number', i);
                image4.addClass('characters');
                $('#defender').append(image4);
            }
        }

        renderFoe();

        alertify.alert('Prepare for battle. Attack!!');

    })





    $('#attack-button').on('click', function(event) {

    		// console.log(yourCharacter[0].hp);
    		// console.log(enemyDefender[0].hp);

    		yourCharacter[0].hp -= enemyDefender[0].counterAttackPower;
            yourCharacter[0].attack += yourCharacter[0].baseAttackPower;
            // console.log(yourCharacter[0].attack);
    		enemyDefender[0].hp -= yourCharacter[0].attack;

    		// console.log(yourCharacter[0].hp);
    		// console.log(enemyDefender[0].hp);

    	function enemyDefeated() {
    		if (enemyDefender[0].hp <= 0) {
    			alertify.alert('One step closer to Kingdom Hearts');

            //if there are enemies left in the array, 'choose another foe' will alert
                if (enemiesAvailable.length != 0) {
                    alertify.alert('Here they come! Who will you face?');    
                }
            //empties the defender array and the defender div
    			enemyDefender = [];
    			$('#defender').empty();
    			// yourCharacter[0].attack += 70;
    			console.log(yourCharacter[0].attack);
            //checks the length of the array and if empty, alerts that you've defeated everything
    			if (enemiesAvailable === undefined || enemiesAvailable.length == 0) {
    				alertify.alert('The path to Kingdom Hearts is clear!');

                    if(confirm('Play again?')) {
                        location.reload(); 
                    } else {
                        alertify.alert('Thanks for playing!');
                    };

                    
				}				

    		}

    	}
    	enemyDefeated();



    })
    // $('#fighters').append(yourCharacter);
    // yourCharacter.push(clickedCharacter);
    // console.log(yourCharacter);
    // $('#enemies').append(enemiesAvailable);
    // console.log(enemiesAvailable);


    // if (defaultCharacters.indexOf(clickedCharacter)


    // var id = event.target.id;
    // for (var i=defaultCharacters.length-1; i>=0; i--) {
    //    	if (defaultCharacters[i] === sora) {
    //    		yourCharacter = i;
    //        	defaultCharacters.splice(i, 1);
    //        	// break;       //<-- Uncomment  if only the first term has to be removed
    //    	}
    //    	// if (defaultCharacters[i] === cloud) {
    //    	// 	yourCharacter = i;
    //     //    	defaultCharacters.splice(i, 1);
    //     //    	// break;       //<-- Uncomment  if only the first term has to be removed
    //    	// }
    // }
    // enemiesAvailable = defaultCharacters.slice();
    // console.log(enemiesAvailable);
    // // yourCharacter = sora.value;
    // $('#enemies').append(enemiesAvailable);
    // enemiesAvailable.push(cloud, mickey, sephiroth);






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

    // $('#enemies').on('click', function(event) {

    // 	console.log(enemiesAvailable);
    // 	enemyId = event.target.id;
    // 	var enemy = setEnemy(enemyId);
    // 	console.log(enemyId);
    // 	for (var i=enemiesAvailable.length-1; i>=0; i--) {
    //     	if (enemiesAvailable[i] === enemy) {
    //     		// enemyDefender = i;
    //         	enemiesAvailable.splice(i, 1);

    // 			$('#defender').empty();
    //         	$('#defender').append(enemy);
    //         	$('#enemies').append(enemiesAvailable);

    //         	console.log(enemy);
    //         	console.log(enemiesAvailable);
    //         	// break;       //<-- Uncomment  if only the first term has to be removed
    //     	}
    // 	}

    // 	// for (var i = 0; i < enemiesAvailable.length; i++) {
    // 	// 	enemiesAvailable[i]
    // 	// }
    // 	// enemyDefender = this.value;

    // });

    // function setEnemy(enemyId) {
    // 	var enemy;
    // 	switch(enemyId) {
    // 		case 'sora':
    // 			enemy = sora;
    // 			break;
    // 		case 'cloud':
    // 			enemy = cloud;
    // 			break;
    // 		case 'mickey':
    // 			enemy = mickey;
    // 			break;
    // 		case 'sephiroth':
    // 			enemy = sephiroth;
    // 			break;
    // 		default:
    // 			console.log(enemyId);
    // 	}
    // 	return enemy;

    // }


});