//global variables
var count = 10;
var countTimer;

//var int someNumber = 12; 

//functions
function onLoadPage()
{
    console.log("On load page function was called.");
    //arrayExamples();
    //stringExamples();
    //comparisonWarning();
    countTimer = setInterval(countdown, 1000);
    var outputP = document.getElementById("output");
    outputP.innerHTML = count;
    //console.log(someNumber);
}

function countdown()
{
    count -= 1;
    var outputP = document.getElementById("output");
    outputP.innerHTML = count;
    if (count <= 0)
    {
        clearInterval(countTimer); //need argument
    }
}

function comparisonWarning()
{
    var firstValue = 85;
    var secondValue = "85";

    if (firstValue == secondValue)
        {
            console.log("They are equal.");
        }
    else
        {
            console.log("They are NOT equal.");
        }
}

function arrayExamples()
{
    var numbers = [10, 2, 7, 40, 780];
    //numbers.sort();
    console.log(numbers);

    numbers.push(500);
    console.log(numbers);

    numbers.unshift(-5);
    console.log(numbers);
    numbers.splice(2, 1, 800, 1000);
    console.log(numbers);

    var greetings = [];
    greetings.push("Hello");
    greetings.splice(5, 0, "Hi", "Good Morning!", "Howdy!");
    console.log(greetings);
    greetings.sort();
    console.log(greetings);

}

function stringExamples()
{
    var sentence = "My dog is asleep.";
    var dogIndex = sentence.indexOf("dog");
    var zIndex = sentence.indexOf("z");

    console.log(dogIndex);
    console.log(zIndex);

    var mPosition = sentence.charAt("0");
    console.log(mPosition);

    var outsidePosition = sentence.charAt(50);
    console.log(outsidePosition);

    console.log(sentence[50]);

    var sentenceArray = sentence.toLowerCase().split(""); //split the sentence into individual characters
    console.log(sentenceArray);
    sentenceArray.reverse();
    console.log(sentenceArray);
}



