const baseInput = document.querySelector(".base-input");
const heightInput = document.querySelector(".height-input");
const areaButton = document.querySelector(".area-button");
const outputArea = document.querySelector(".output-area");

areaButton.addEventListener("click", function () {
  var base = Number(baseInput.value);
  var height = Number(heightInput.value);
  var Area = (base * height) / 2;

  outputArea.innerText = "Area of Triangle is " + Area;
});
