function handleButtonClick()
{
    var firstBlank = document.getElementById("blank1").value;
    var secondBlank = document.getElementById("blank2").value;
    var thirdBlank = document.getElementById("blank3").value;
    var fourthBlank = document.getElementById("blank4").value;
    var fifthBlank = document.getElementById("blank5").value;
    var sixthBlank = document.getElementById("blank6").value;
    var seventhBlank = document.getElementById("blank7").value;
    var eighthBlank = document.getElementById("blank8").value;
    var ninthBlank = document.getElementById("blank9").value;

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "A long, long time ago, in a realm of " + firstBlank + " and chaos, there lived a hero that rode a "
    + secondBlank + " unicorn. Often times, " + thirdBlank + " would ride their mighty noble beast into war. As treachery often stuck the land of " + 
    fourthBlank + " , our epic hero would have to avoid " + fifthBlank + " and " + sixthBlank + " while galloping straight for "+
     seventhBlank + " , the Hunger of Xanthas. Often times, our mighty hero would " 
    + eighthBlank + " when encountering this fearsome foe, which would cause them to lose the battle, and thus the war. Our hero would fall victim with a tragic case of "
    + ninthBlank + " , subsequently encouraging the Hunger of Xanthas to stop time just to restart it right before the battle, solely for fun. What did you expect, a happy ending?"
}