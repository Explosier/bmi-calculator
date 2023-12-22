function calculateBMI() {
    let heightCm = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (heightCm === "" || weight === "") {
        displayError("Prašome užpildyti abu laukus.");
        return;
    }

    if (heightCm > 0 && weight > 0) {
        let heightMeters = heightCm / 100;
        let bmi = weight / (heightMeters * heightMeters);
        let resultText = "Jūs sveriate ";

        if (bmi < 18.5) {
            resultText += "per mažai.";
            setBMIResultColor("bmi-low");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText += "normaliai.";
            setBMIResultColor("bmi-normal");
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultText += "per daug.";
            setBMIResultColor("bmi-high");
        } else {
            resultText = "Jums yra pavojingas nutukimas.";
            setBMIResultColor("bmi-danger");
        }

        resultText += "<br>Jūsų KMI yra: " + bmi.toFixed(2);
        document.getElementById("bmiResult").innerHTML = resultText;
        document.getElementById("result").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
}

function setBMIResultColor(className) {
    let bmiResultElement = document.getElementById("bmiResult");
    bmiResultElement.className = "";
    bmiResultElement.classList.add(className);
}

function displayError(message) {
    let errorElement = document.getElementById("error");
    errorElement.innerHTML = message;
    errorElement.style.display = "block";
    document.getElementById("result").style.display = "none";
}

function resetForm() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("error").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateButton").addEventListener("click", calculateBMI);
    document.getElementById("resetButton").addEventListener("click", resetForm);
});