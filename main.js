let randomNumber = [Math.floor(Math.random() * 10) + 1];
let enterBtn = document.getElementById("enter");
let againBtn = document.getElementById("play-again");
response = document.getElementById("responseText");

enterBtn.addEventListener("click", function () {
  const input = document.getElementById("inputNumber").value;

  if (input == randomNumber) {
    document.getElementById("responseText").textContent =
      "Hurray! You got it right";
  } else if (input < randomNumber) {
    document.getElementById("responseText").textContent =
      "Too Low, Please try again";
  } else if (input > randomNumber) {
    document.getElementById("responseText").textContent =
      "Too High, Please try again";
  }
});

againBtn.addEventListener("click", function () {
  document.getElementById("inputNumber").value = "";
  document.getElementById("responseText").textContent = "Let's play again";
  randomNumber = [Math.floor(Math.random() * 10) + 1];
});
