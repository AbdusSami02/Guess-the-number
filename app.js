
var randomnum = Math.floor(Math.random()*10)+1;
console.log(randomnum);
var numguess = prompt("Guess the number");

if (numguess == randomnum ) {
    alert("You guess the correct number");
} else {
    alert("You guess the wrong number");
};
