var sentences = [
    "Text changed to the first sentence.",
    "Text changed to the second sentence.",
    "Text changed to the third sentence."
];
var currentIndex = 0; 

function cycleText() {
   
    var bodyElement = document.body;
    document.getElementById("outputText").textContent = sentences[currentIndex];
    currentIndex = (currentIndex + 1) % sentences.length;
    bodyElement.style.backgroundColor = getRandomColor(); 
}

cycleText();

document.getElementById("changeTextButton").addEventListener("click", cycleText);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
