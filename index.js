const formAnswers = document.querySelector(".form-data");
const button = document.querySelector(".submit-button");
const output = document.querySelector(".output");

var rightAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12,16,20",
  "Equilateral triangle",
];
button.addEventListener("click", function () {
  // Using formData Api to get data from form
  //   Creating a new FormData Object
  const formResults = new FormData(formAnswers);
  // FormData variable can be use in for of loop
  // FormData variable.values gives the value of entries in form
  var score = 0;
  var index = 0;
  for (let value of formResults.values()) {
    if (value === rightAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  output.innerText = "Your total score is " + "" + score;
});
