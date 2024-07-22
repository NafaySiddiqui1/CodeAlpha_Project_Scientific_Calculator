function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
function square() {
  let display = document.getElementById("display");
  display.value = Math.pow(display.value, 2);
}
