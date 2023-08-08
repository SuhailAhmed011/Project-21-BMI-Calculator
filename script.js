document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener('click', calculateBMI);
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById('result').textContent = 'Please enter valid values for weight and height.';
        return;
    }

    const bmi = weight / (height * height);
    const category = getBMICategory(bmi);

    const resultText = `Your BMI: ${bmi.toFixed(2)} - ${category}`;
    document.getElementById('result').textContent = resultText;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
