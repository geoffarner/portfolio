let equal_pressed = 0;
// refer buttons (!AC && !DEL)
let button_input = document.querySelectorAll(".input-button");
// refer input, equal, clear, erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};
// access classes
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});
//solve input
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    alert("Invalid Input");
  }
});
// clear input all
clear.addEventListener("click", () => {
  input.value = "";
});
// clear single input
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

// navigation
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
