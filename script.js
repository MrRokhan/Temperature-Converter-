const tempNumber = document.getElementById("value");
const fromDegree = document.getElementById("fromDegree");
const toDegree = document.getElementById("toDegree");
const conv = document.getElementById("convert");
const result = document.getElementById("converted");

function formula() {
    console.log("Button clicked!"); // Debugging
    let inputValue = parseFloat(tempNumber.value);
    let fromUnit = fromDegree.value;
    let toUnit = toDegree.value;

    console.log("Input Value:", inputValue); // Debugging

    if (isNaN(inputValue)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let convertedValue;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedValue = (inputValue * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            convertedValue = inputValue + 273.15;
        } else {
            convertedValue = inputValue;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedValue = (inputValue - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            convertedValue = (inputValue - 32) * 5/9 + 273.15;
        } else {
            convertedValue = inputValue;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedValue = inputValue - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedValue = (inputValue - 273.15) * 9/5 + 32;
        } else {
            convertedValue = inputValue;
        }
    }

    console.log("Converted Value:", convertedValue); // Debugging
    result.textContent = `Converted Temperature: ${convertedValue.toFixed(2)}° ${toUnit.charAt(0).toUpperCase()}`;
}

conv.addEventListener("click", formula);
