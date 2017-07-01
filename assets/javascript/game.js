 // Crystal Variables
 var crystal = {
   blue:
   {
     name: "Blue",
     value: 0
   },
   green:
   {
     name: "Green",
     value: 0
   },
   red:
   {
     name: "Red",
     value: 0
   },
   yellow:
   {
     name: "Yellow",
     value: 0
   }
 };
 
 // Scores (Current and Target)
 var currentScore = 0;
 var targetScore = 0;
 
 // Wins and Losses
 var winCount = 0;
 var lossCount = 0;
 
 
 var getRandom = function(min, max) {
   var ranum = 0;
   ranum = Math.floor((Math.random() * (max - min )) + 1);
   if (ranum < min){
     ranum = ranum + min;
   }
   console.log(ranum);
   return ranum
 };
 
 // Starts the Game (and restarts the game)
 var startGame = function() {
 
   // Reset the Current Score
   currentScore = 0;
 
   // Set a new Target Score (between 19 and 120)
   targetScore = getRandom(19, 120);
 
   // Set different values for each of the crystals (between 1 and 12)
   crystal.blue.value = getRandom(1, 13);
   crystal.red.value = getRandom(1, 13);
   crystal.green.value = getRandom(1, 13);
   crystal.yellow.value = getRandom(1, 13);
 
   // Change the HTML to reflect all of these changes
   $("#your-score").html(currentScore);
   $("#target-score").html(targetScore);
  };
 
 // Check if User Won or Lost and Reset the Game
 var checkWin = function() {
 
   // Check if currentScore is larger than targetScore
   if (currentScore > targetScore) {

     $("#your-message").html("Sorry. You lost!");
     $("#your-score").html(currentScore);
     
     // Add to Loss Counter
     lossCount++;
 
     // Change Loss Count HTML
     $("#loss-count").html(lossCount);
 
     // Restart the game
     startGame();
   }
 
   else if (currentScore === targetScore) {
    
     $("#your-message").html("Congratulations! You Won!");
      $("#your-score").html(currentScore);
   
     // Add to the Win Counter
     winCount++;
 
     // Change Win Count HTML
     $("#win-count").html(winCount);
 
     // Restart the game
     startGame();
   }
 
 };
 
 // Respond to clicks on the crystals
 var addValues = function(clickedCrystal) {
 
   currentScore = currentScore + clickedCrystal.value;
   $("#your-score").html(currentScore);
   $("#your-message").html("");
 
   checkWin();

 };
 
 // MAIN PROCESS
 // =================================================================
 
 // Starts the Game the First Time.

$(document).ready(function() {

 startGame();
 
 $("#blue").click(function() {
   addValues(crystal.blue);
 });
 
 $("#red").click(function() {
   addValues(crystal.red);
 });
 
 $("#green").click(function() {
   addValues(crystal.green);
 });
 
 $("#yellow").click(function() {
   addValues(crystal.yellow);
 });
    
 });