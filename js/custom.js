// Functions
function changeBtnTxt() {
    // The Toggle Button
    var btn = document.getElementById("btn");

    if(btn.innerHTML === "Show Results") {
        btn.innerHTML = "Hide Results";
    } else {
        btn.innerHTML = "Show Results";
    }
}

function showResults() {
    // Answers
    var results = document.getElementById("classQuiz");
    
    // Answer Header Text
    var resultsHeader = document.getElementById("classQuizHeader");

    results.classList.toggle("hideResults");
    resultsHeader.classList.toggle("hideResults");
    changeBtnTxt();
}