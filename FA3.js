let generatedNumbers = []; 

function generateValues() {
    let num1 = Math.random() * 20;
    let num2 = Math.random() * 20;
    let num3 = Math.random() * 20;

    let roundNum1 = Math.ceil(num1);
    let roundNum2 = Math.ceil(num2);
    let roundNum3 = Math.ceil(num3);

    let largest = Math.max(...generatedNumbers);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter = alphabet[roundNum1 - 1] || "Z";

    let totalMinutes = roundNum2 * roundNum3;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    let numbersText = `
        <strong>Generated Numbers (Before Rounding):</strong> ${num1.toFixed(2)}, ${num2.toFixed(2)}, ${num3.toFixed(2)}<br>
        <strong>Rounded Numbers:</strong> ${roundNum1}, ${roundNum2}, ${roundNum3}<br><br>
    `;
	
	generatedNumbers = [roundNum1, roundNum2, roundNum3];
    document.getElementById("mcd").innerText = generatedNumbers[0];
    document.getElementById("kfc").innerText = generatedNumbers[1];
    document.getElementById("joll").innerText = generatedNumbers[2];

    let subjects = ["McDonalds", "KFC", "Jollibee"];
    let maxNum = Math.max(...generatedNumbers);
    let topSubjects = subjects.filter((_, index) => generatedNumbers[index] === maxNum);

    let resultText = `🥳The restaurant(s) with the highest number (${maxNum}) is: ${topSubjects.join(", ")}🎉`;

	
    let storyText = `
        🥳The restaurant(s) with the highest count (${maxNum}) is: ${topSubjects.join(", ")}🎉<br>
        👨‍🍳The name of the best cook of that restaurant starts with the letter "<strong>${letter}</strong>".👩‍🍳<br>
        ⏩Their average serving time is <strong>${hours} hour(s) and ${minutes} minutes</strong>.⏪<br>
    `;

    document.getElementById("numbers").innerHTML = numbersText;
    document.getElementById("story").innerHTML = storyText;

    generateNumbers();
}

