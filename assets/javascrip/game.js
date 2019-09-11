$(document).ready(function () {
var wins = 0;
var losses = 0;
var total = 0;

var num1 = Math.floor(Math.random() * 9) + 1;
    console.log(num1)
var num2 = Math.floor(Math.random() * 9) + 1;
    console.log(num2)
var num3 = Math.floor(Math.random() * 9) + 1;
    console.log(num3)
var num4 = Math.floor(Math.random() * 9) + 1;
    console.log(num4)

function winning() {
    wins++;
    $("#wins").text("Wins: " + wins);
    replay()
}
function losing() {
    wins++;
    $("#losses").text("Losses: " + losses);
    replay()
}


var randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);

$(".one").on("click", function () {

    });

$(".two").on("click", function () {
    
    });
    
$(".three").on("click", function () {
    
    });
    
$(".four").on("click", function () {
        
    });
});



