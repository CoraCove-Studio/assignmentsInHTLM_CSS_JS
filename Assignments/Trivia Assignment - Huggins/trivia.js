//global variables
var count;
var countTimer;
var palindromeCheck;

//functions

function handleButtonClick()
{
    //Timer portion of assignment
    var outputP = document.getElementById("output");
    count = document.getElementById("number").value;
    countTimer = setInterval(countdown, 1000);
    outputP.innerHTML = count;

    if (count <= 0)
    {
        clearInterval(countTimer);
        outputP.innerHTML = "Please insert a proper value."
    }
}

function countdown()
{
    count -= 1;
    var outputP = document.getElementById("output");
    outputP.innerHTML = count;
    if (count <= 0)
    {
        clearInterval(countTimer);
    }
}

function handlePalindromeButtonClick()
{
    var outputForPalindrome = document.getElementById("outputForPalindrome");
    palindromeCheck = document.getElementById("palindrome").value;
    var palindromeArray = palindromeCheck.split(", ");
    var palindromeReverse = palindrome.split().reverse();

    if (palindromeArray === palindromeReverse)
    {
        outputForPalindrome.innerHTML = "This is a palindrome.";
    }

    else
    {
        outputForPalindrome.innerHTML = "This is NOT a palindrome.";
    }
}