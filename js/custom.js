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

    results.classList.toggle("hideResults");
    changeBtnTxt();
}