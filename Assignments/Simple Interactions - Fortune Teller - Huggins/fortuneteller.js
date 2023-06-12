function handleButtonClick()
{
    var question = document.getElementById("question").value;

    var outputDiv = document.getElementById("output");

    if (question == "")
        {
            outputDiv.innerHTML = "You did not ask a question my child."
        }
    
    var randomNumber = Math.ceil(Math.random() * 100);

    while (randomNumber < 10 && question != "")
    {
        outputDiv.innerHTML = "I am intrigued."
    }

    while (randomNumber > 10 && randomNumber < 20 && question != "")
    {
        outputDiv.innerHTML = "Perhaps my child."
    }

    while (randomNumber > 20 && randomNumber < 30 && question != "")
    {
        outputDiv.innerHTML = "It is undecided."
    }

    while (randomNumber > 30 && randomNumber < 40 && question != "")
    {
        outputDiv.innerHTML = "Do you really think I know?"
    }

    while (randomNumber > 40 && randomNumber < 50 && question != "")
    {
        outputDiv.innerHTML = "Why are you asking me when you could be asking your mother."
    }

    while (randomNumber > 50 && randomNumber < 60 && question != "")
    {
        outputDiv.innerHTML = "Do I look like an information ATM."
    }

    while (randomNumber > 60 && randomNumber < 70 && question != "")
    {
        outputDiv.innerHTML = "Take consolidation in the fact that I have no idea how to answer that."
    }

    while (randomNumber > 70 && randomNumber < 80 && question != "")
    {
        outputDiv.innerHTML = "Whatever you want to believe is the true answer."
    }

    while (randomNumber > 80 && randomNumber < 90 && question != "")
    {
        outputDiv.innerHTML = "The answer you seek lies in your heart."
    }

    while (randomNumber > 90 && randomNumber < 100 && question != "")
    {
        outputDiv.innerHTML = "¯|_(ツ)_/¯"
    }
    
    while (randomNumber == 100 && question != "")
    {
        outputDiv.innerHTML = "Beats me."
    }
}