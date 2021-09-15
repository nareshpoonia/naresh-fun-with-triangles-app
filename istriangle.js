const triangleButton = document.querySelector(".triangle-button");
const angleInputs = document.querySelectorAll(".angle-input");
const outputTriangle = document.querySelector(".output-triangle");

triangleButton.addEventListener("click", function () {
  var sumOfAngles = 0;
  for (let i = 0; i < angleInputs.length; i++) {
    sumOfAngles = sumOfAngles + Number(angleInputs[i].value);
  }
  if (sumOfAngles === 180) {
    outputTriangle.innerText = "Yes, your angles form a triangle";
  } else {
    outputTriangle.innerText = "No, your angles doesn't form a triangle";
  }
});
