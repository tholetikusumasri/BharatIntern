function convertTemperature() {
    var temperatureInput = document.getElementById('temperature');
    var unitSelect = document.getElementById('unit');
    var temperatureError = document.getElementById('temperature-error');
    var unitError = document.getElementById('unit-error');
    var celsiusOutput = document.getElementById('celsius');
    var fahrenheitOutput = document.getElementById('fahrenheit');
    var kelvinOutput = document.getElementById('kelvin');
    var celsiusContainer = document.getElementById('celsius-container');
    var fahrenheitContainer = document.getElementById('fahrenheit-container');
    var kelvinContainer = document.getElementById('kelvin-container');

    var temperature = parseFloat(temperatureInput.value);

    if (!isNaN(temperature) && temperatureInput.checkValidity()) {
        var container = document.querySelector('.container');
        container.classList.remove('sunny', 'winter');

        if ( (temperature > 25 && unitSelect.value === 'celsius') || (temperature > 73 && unitSelect.value === 'fahrenheit')||(temperature > 298.15 && unitSelect.value === 'kelvin')) {
            container.style.backgroundImage = "url('giphy (1).gif')";
        } else if ((temperature <= 20 && unitSelect.value === 'celsius') || (temperature <= 68 && unitSelect.value === 'fahrenheit')||(temperature <= 293.15 && unitSelect.value === 'kelvin')) {
            container.style.backgroundImage = "url('giphy.gif')";
        } else {
            container.style.backgroundImage = "url('1.png')";
        }
        temperatureError.style.display = 'none';
        unitError.style.display = 'none';

        var unit = unitSelect.value;
        if (unit === '') {
            alert("Please select units");
        } else if (unit === 'celsius') {
            celsiusOutput.textContent = '';
            fahrenheitOutput.textContent = ((temperature * 9 / 5) + 32).toFixed(2) + " F";
            kelvinOutput.textContent = (temperature + 273.15).toFixed(2) + " K";
            celsiusContainer.style.display = 'none';
            fahrenheitContainer.style.display = 'block';
            kelvinContainer.style.display = 'block';
        } else if (unit === 'fahrenheit') {
            celsiusOutput.textContent = ((temperature - 32) * 5 / 9).toFixed(2) + " C";
            fahrenheitOutput.textContent = '';
            kelvinOutput.textContent = (((temperature - 32) * 5 / 9) + 273.15).toFixed(2) + " K";
            celsiusContainer.style.display = 'block';
            fahrenheitContainer.style.display = 'none';
            kelvinContainer.style.display = 'block';
        } else if (unit === 'kelvin') {
            celsiusOutput.textContent = (temperature - 273.15).toFixed(2) + " C";
            fahrenheitOutput.textContent = (((temperature - 273.15) * 9 / 5) + 32).toFixed(2) + " F";
            kelvinOutput.textContent = '';
            celsiusContainer.style.display = 'block';
            fahrenheitContainer.style.display = 'block';
            kelvinContainer.style.display = 'none';
        }
    } else {
        if (!temperatureInput.checkValidity()) {
            temperatureError.style.display = 'block';
        } else {
            temperatureError.style.display = 'none';
        }

        if (unitSelect.value === '') {
            unitError.style.display = 'block';
        } else {
            unitError.style.display = 'none';
        }

        celsiusOutput.textContent = '';
        fahrenheitOutput.textContent = '';
        kelvinOutput.textContent = '';
        celsiusContainer.style.display = 'none';
        fahrenheitContainer.style.display = 'none';
        kelvinContainer.style.display = 'none';
    }
}
