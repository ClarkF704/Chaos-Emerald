var wins = 0;
var loser = 0;
var computerNumber = Math.floor(Math.random() * 102) + 19;
var rOne = Math.floor(Math.random() * 12) + 1;
var rTwo = Math.floor(Math.random() * 12) + 1;
var rThree = Math.floor(Math.random() * 12) + 1;
var rFour = Math.floor(Math.random() * 12) + 1;
var userScore = 0;

$("#computerNumber").html(computerNumber);

$("#dOne").click(function () {
    userScore += rOne;
    $("#myScore").html(userScore);
    winCheck();
});
$("#dTwo").click(function () {
    userScore += rTwo;
    $("#myScore").html(userScore);
    winCheck();
});
$("#dThree").click(function () {
    userScore += rThree;
    $("#myScore").html(userScore);
    winCheck();
});
$("#dFour").click(function () {
    userScore += rFour;
    $("#myScore").html(userScore);
    winCheck();
});
function resetGame(){
 computerNumber = Math.floor(Math.random() * 102) + 19;
 $("#computerNumber").html(computerNumber);
 rOne = Math.floor(Math.random() * 12) + 1;
 rTwo = Math.floor(Math.random() * 12) + 1;
 rThree = Math.floor(Math.random() * 12) + 1;
 rFour = Math.floor(Math.random() * 12) + 1;
 userScore = 0;
 $("#myScore").html(userScore);


}
function winCheck() {
    if (userScore === computerNumber) { 
        wins++;
        $("#winz").html(wins);
        alert("Talk about low budget flights! No food or movies, I'm outta here! I like running better!")
        resetGame();
             
    }
    if (userScore > computerNumber) { 
        loser++;
        $("#loss").html(loser);
        alert("Prepare to be destroyed!")
        resetGame();
    }
}
