let winningNumber = 19;
let usrGuess = +prompt("Guess a Number");

if(usrGuess === winningNumber)
{
    console.log("Your guess is right!");
}
else{
   if(usrGuess<winningNumber)
   {
    console.log("too low!");
   }
   else{
    console.log("too high!!");
   }
}