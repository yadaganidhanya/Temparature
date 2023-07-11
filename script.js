function convertToFahrenheit() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  
  if (celsiusInput.value) {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    document.getElementById("result").innerHTML = celsius.toFixed(2) + " degrees Celsius = " + fahrenheit.toFixed(2) + " degrees Fahrenheit";
  }
}

function convertToCelsius() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  
  if (fahrenheitInput.value) {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
    document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + " degrees Fahrenheit = " + celsius.toFixed(2) + " degrees Celsius";
  }
}