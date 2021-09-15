const baseInput = document.querySelector(".base-input");
const heightInput = document.querySelector(".height-input");
const hypotenuseButton = document.querySelector(".hypotenuse-button");
const outputHypotenuse = document.querySelector(".output-hypotenuse");

hypotenuseButton.addEventListener("click", function () {
  var base = Number(baseInput.value);
  var height = Number(heightInput.value);
  var sumOfSidesSquare = base * base + height * height;
  var hypotenuse = Math.sqrt(sumOfSidesSquare);
  outputHypotenuse.innerText = "The length of Hypotenuse is " + hypotenuse;
  console.log(hypotenuse);
});
