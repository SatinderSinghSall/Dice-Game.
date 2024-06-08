var RandomNumber_1 = Math.floor(Math.random() * 6) + 1; //Number from 1 to 6.
var RandomDiceImage = "dice" + RandomNumber_1 + ".png"; //Images of dice1.png - dice2.png
var RandomDiceImageSource = "images/" + RandomDiceImage; //Folder images/dice1.png - images/dice6.png
var DiceImage_1 = document.querySelectorAll("img")[0];
DiceImage_1.setAttribute("src", RandomDiceImageSource);

var RandomNumber_2 = Math.floor(Math.random() * 6) + 1;
var RandomDiceImageSource_2 = "images/dice" + RandomNumber_2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", RandomDiceImageSource_2);

prompt("Can you guess who will win? : Then press OK.");

var UserPrompt_Name_1 = prompt("Enter the 'Player - 1' name : ");
var UserPrompt_Name_2 = prompt("Enter the 'Player - 2' name : ");

if (RandomNumber_1 > RandomNumber_2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
  alert(UserPrompt_Name_1 + " wins over " + UserPrompt_Name_2);
}

else if (RandomNumber_1 < RandomNumber_2)
{
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
  alert(UserPrompt_Name_2 + " wins over " + UserPrompt_Name_);
}

else
{
  document.querySelector("h1").innerHTML = "Draw.";
}
