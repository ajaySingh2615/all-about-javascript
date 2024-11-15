"use strict";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log("Your guess is : ", guess);
  console.log("Your guess is : ", typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ no number!";
  }
});
