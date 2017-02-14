$(document).ready(function() {

  //generate random number 
	var RandomNumber = Math.floor((Math.random()*101)+19);
	console.log(RandomNumber);
  
  //Display the random number on screen
	$('#computerNumber').text(RandomNumber);

  //Display wins 
	var wins = 0;
	$('#winsCounter').text(wins);
  //Display losses 
	var losses = 0; 
	$('#lossesCounter').text(losses);
  //display adding total 
	var userTotal = 0;
	$('#currentTotal').text(userTotal);
	var guessesTotal = 0;


	//Setting values for each jewel with max 12 min 1
	var blue = Math.floor((Math.random() * 11) + 1);
	var green = Math.floor((Math.random() * 11) + 1);
	var red = Math.floor((Math.random() * 11) + 1);
	var yellow = Math.floor((Math.random() * 11) + 1);


	//Reseting Game
	function resetGame(){
      Reset = Math.floor((Math.random() * 101) +19);
      console.log(Reset);
      $('#randomNumber').text(RandomNumber);
     	 blue= Math.floor((Math.random() * 11) + 1);
     	 green= Math.floor((Math.random() * 11) + 1);
     	 red= Math.floor((Math.random() * 11) + 1);
     	 yellow= Math.floor((Math.random() * 11) + 1);
      userTotal= 0;
      $('#guessesTotal').text(userTotal);
  	}

  	function youWin() {
		alert("You Win!");
		wins++;
		$('#winsCounter').text(wins);
		resetGame();
	}

	 function youLose() {
	 losses++;
	 alert("You Lose!");
	 $('#lossesCounter').text(losses);
	 resetGame();

	}

	//Event Function

	$('#blue').on('click', function(){
    	userTotal = userTotal + blue;
    console.log("New userTotal= " + userTotal);
        $('#currentTotal').text(userTotal); 
          //sets win/lose conditions
        if ( userTotal === RandomNumber){
          youWin();
        }
        else if ( userTotal > RandomNumber){
          youLose();
        }   
  });  
  	
  	$('#green').on('click', function(){
    userTotal = userTotal + green;
    console.log("New userTotal= " + userTotal);
    $('#currentTotal').text(userTotal); 
        if (userTotal === RandomNumber){
          youWin();
        }
        else if ( userTotal > RandomNumber ){
          youLose();
        } 
  });

  	$('#red').on('click', function(){
    userTotal = userTotal + red;
    console.log("New userTotal= " + userTotal);
    	$('#currentTotal').text(userTotal);
          if (userTotal === RandomNumber){
          youWin();
        }
        else if ( userTotal > RandomNumber){
          youLose();
        } 
  });

  	$('#yellow').on('click', function(){
    userTotal = userTotal + yellow;
    console.log("New userTotal= " + userTotal);
    	$('#currentTotal').text(userTotal); 
          if (userTotal === RandomNumber){
          youWin();
        }
        else if ( userTotal > RandomNumber){
          youLose();
        }
});
});

