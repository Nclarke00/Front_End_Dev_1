document.getElementById("fetchButton").addEventListener("click", fetchRandomFact);

function fetchRandomFact() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            document.getElementById("factDisplay").textContent = data.text;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}