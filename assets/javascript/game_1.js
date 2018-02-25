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
        id: $('#cloud'),
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
   
    var defaultCharacters = [sora, cloud, mickey, sephiroth];
    //player character
    var yourCharacter = [];
    //enemies after the player has chosen their character
    var enemiesAvailable = [];
    //defender -- chosen from enemiesAvailable
    var enemyDefender = [];
    
    var enemiesDefeated = [];

$(document).ready(function() {

//    $('#audio')[0].play();
    alertify.alert('And so it begins. Choose your character.');
    renderCharacters();
});

    function renderCharacters() {
        for (var i = 0; i < defaultCharacters.length; i++) {
            var image = $('<img>');
            image.attr('src', defaultCharacters[i].src);
            image.attr('value', defaultCharacters[i].name);
            image.attr('data-number', i);
            image.addClass('characters');
            $('#fighters').append(image);
        }
    };

    //on click event for the fighters div
    $('#fighters').on('click', '.characters', function(event) {
        
        var clickedCharacter = $(this).data('number');
        yourCharacter.push(defaultCharacters[clickedCharacter]);
        
        defaultCharacters.splice(clickedCharacter, 1);

        for (var i = 0; i < defaultCharacters.length; i++) {

            enemiesAvailable.push(defaultCharacters[i]);
        }

        $('#fighters').empty();
        
        alertify.alert('Now choose an opponent.')
        renderEnemies();
        renderYours();
    });

        function renderEnemies() {
            for (var i = 0; i < enemiesAvailable.length; i++) {
                var image2 = $('<img>');
                image2.attr('src', enemiesAvailable[i].src);
                image2.attr('value', enemiesAvailable[i].name);
                image2.attr('data-number', i);
                image2.addClass('characters');
                $('#enemies').append(image2, enemiesAvailable[i].hp);
            }
        };

        function renderYours() {
         
            for (var i = 0; i < yourCharacter.length; i++) {
                var image3 = $('<img>');
                image3.attr('src', yourCharacter[i].src);
                image3.attr('value', yourCharacter[i].name);
                image3.attr('data-number', i);
                image3.addClass('characters');
                $('#fighters').append(image3);
            }
        };

    //on click event for the enemies div
    $('#enemies').on('click', '.characters', function(event) {

        var clickedEnemy = $(this).data('number');
        enemyDefender.push(enemiesAvailable[clickedEnemy]);
       
        enemiesAvailable.splice(clickedEnemy, 1);

        $('#enemies').empty();
        
        renderEnemies();
        renderFoe();
        
        alertify.alert('Prepare for battle. Attack!!');

    });

        function renderEnemies() {
      
            for (var i = 0; i < enemiesAvailable.length; i++) {
                var image2 = $('<img>');
                image2.attr('src', enemiesAvailable[i].src);
                image2.attr('value', enemiesAvailable[i].name);
                image2.attr('data-number', i);
                image2.addClass('characters');
                $('#enemies').append(image2);
            }
        };

        function renderFoe() {
           
            for (var i = 0; i < enemyDefender.length; i++) {0
                var image4 = $('<img>');
                image4.attr('src', enemyDefender[i].src);
                image4.attr('value', enemyDefender[i].name);
                image4.attr('data-number', i);
                image4.addClass('characters');
                $('#defender').append(image4);
            }
        };


    $('#attack-button').on('click', function(event) {

    		yourCharacter[0].hp -= enemyDefender[0].counterAttackPower;
            yourCharacter[0].attack += yourCharacter[0].baseAttackPower;
    		enemyDefender[0].hp -= yourCharacter[0].attack;
            enemyDefeated();
        //checks the length of the array and if full, alerts that you've defeated everything
        if(enemiesDefeated.length === 3){
        gameOver();
    }
    	});

        function enemyDefeated() {
    		if (enemyDefender[0].hp <= 0) {
                enemiesDefeated.push(enemyDefender[0]);
    			if (enemyDefender.length >= 2){
                    alertify.alert('One step closer to Kingdom Hearts');
                }
            //if there are enemies left in the array, 'choose another foe' will alert
                if (enemiesAvailable.length != 0) {
                    alertify.alert('Here they come! Who will you face?');    
                }
            //empties the defender array and the defender div
    			enemyDefender = [];
    			$('#defender').empty();
            
            }};
    			

    function gameOver() {
        alertify.alert('The path to Kingdom Hearts is clear!');
        
        alertify.confirm("Play Again?", function(x){
            if (x){
                location.reload();
            }
            else{
                alertify.alert("Thanks for playing!");   
            }
        });
    }