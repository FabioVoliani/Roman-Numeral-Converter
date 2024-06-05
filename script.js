const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", convertToRoman)

function convertToRoman() {
  const numberInput = document.getElementById("number");

  if (numberInput.value === "") {
    output.innerText = `Please enter a valid number`;
    return
  } else if (numberInput.value <= "-1") {
    output.innerText = `Please enter a number greater than or equal to 1`;
    return
  } else if (numberInput.value >= 4000) {
    output.innerText = `Please enter a number less than or equal to 3999`;
    return
  }

  let romanNumeral = "";
  let romanList = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ]

  for (let i = 0; i < romanList.length; i++) {
    while (numberInput.value >= romanList[i][1]) {
      romanNumeral += romanList[i][0];
      numberInput.value -= romanList[i][1]
    }
  }
  output.innerText = `${romanNumeral}`
}
