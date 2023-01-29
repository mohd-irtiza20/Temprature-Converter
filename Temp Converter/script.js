const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('option');
    const valueTemp = option.options[tempSelected.selectedIndex].value;



    // Celsius To Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(0);
        return fahrenheit;
    }

    // Fahrenheit To Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(0);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("output").innerHTML = celToFah(inputTemp) + "°F";
    }
    else {
        document.getElementById("output").innerHTML = fahToCel(inputTemp) + "°C";
    }

}