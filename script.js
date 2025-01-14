document.getElementById("convert-btn").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    if (isNaN(temperature)) {
        document.getElementById("output").innerText = "Please enter a valid number!";
        return;
    }

    let convertedTemp = 0;
    let convertedUnit = "";
    if (unit === "celsius") {
        convertedTemp = (temperature * 9) / 5 + 32;
        convertedUnit = "Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemp = ((temperature - 32) * 5) / 9;
        convertedUnit = "Celsius";
    } else if (unit === "kelvin") {
        convertedTemp = temperature - 273.15;
        convertedUnit = "Celsius";
    }
    document.getElementById("output").innerText = `${convertedTemp.toFixed(2)} ${convertedUnit}`;
});
