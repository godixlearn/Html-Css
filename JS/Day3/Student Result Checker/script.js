

const markinput = document.getElementById("mark");

const checkButton = document.getElementById("checkButton");

const result = document.getElementById("result");


function checkResult(){
    const mark = Number(markinput.value);

    if(isNaN(mark) || mark < 0 || mark > 100) {
        result.textContent = "Please enter a valid mark between 0 and 100.";
        result.style.color = "orange";
        return;
    }

    if(mark >= 50) {
        result.textContent = "You have passed the exam!";

        result.style.color = "green";
    }else{
        result.textContent = "You have failed the exam!";

        result.style.color = "red";
    }
}


checkButton.addEventListener("click", checkResult);