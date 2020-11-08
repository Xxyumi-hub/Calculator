let historyData = [];

//Sets the display to 0 when the C button is pressed
function clearDisplay() {
 document.getElementById("output").innerText = "0";
}

function removeZero() {
  let value = document.getElementById("output").innerHTML;
  if (value == "0") {
    value = " ";
    document.getElementById("output").innerHTML = value;
  }
}

//This will get the value of the output, divide it by 100 and then set it as the new value in the output
function percent() {
  let value = document.getElementById("output").innerHTML;
  value = value / 100;
  document.getElementById("output").innerHTML = value;
}

function display(value) {
      removeZero();
      document.getElementById("output").innerHTML += value;
}

function solve() {
      removeZero();
      let equation = document.getElementById("output").innerHTML;
      let solved = eval(equation);
     document.getElementById('output').innerHTML = solved;
    historyData.push(solved);
    document.getElementById("history-value").innerHTML = solved;
}