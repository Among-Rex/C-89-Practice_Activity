score = 0;
//● btn-success: will add light green border and background color to the button 
//● onclick="saveScore()": we will define this function in js file
function UpdateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "score" + score;
}

function SaveScore() {
    localStorage.setItem("score", score);
}

function NextPage() {
    window.location = "activity_2.html";
}