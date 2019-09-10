var wins = 0;
var losses = 0;
var total = 0;

$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);
});


