var crystal = {
    crystal1:
    {
        value:0
    },
    crystal2:
    {
        value:0
    },
    crystal3:
    {
        value:0
    },
    crystal4:
    {
        value:0
    }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
var startGame = function(){
    currentScore = 0;
    targetScore = getRandom(19,120);
    crystal.crystal1.value = getRandom(1,12);
    crystal.crystal2.value = getRandom(1,12);
    crystal.crystal3.value = getRandom(1,12);
    crystal.crystal4.value = getRandom(1,12);
    
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
}


var addValues = function(crystal){
    currentScore = currentScore + crystal.value;
    $("#yourScore").html(currentScore);
    checkWin();

}  
 
var checkWin = function(){
    if (currentScore>targetScore){
        alert("Sorry, You Lost!");
        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();
    }
    else if (currentScore==targetScore){
        alert("Congratulations! You Won!");
        winCount++;
        $("#winCount").html(winCount);
        startGame();
    }
}
startGame();

$("#Crystal1").click(function(){
    addValues(crystal.crystal1);
});
$("#Crystal2").click(function(){
    addValues(crystal.crystal2);
});
$("#Crystal3").click(function(){
    addValues(crystal.crystal3);
});
$("#Crystal4").click(function(){
    addValues(crystal.crystal4);;
});
