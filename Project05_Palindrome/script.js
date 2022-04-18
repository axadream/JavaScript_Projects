const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  //Original solution:
  // const word = document.querySelector(".input-text").value;
  //   let len = word.length;

  //   let start = word.substring(0, Math.floor(len / 2)).toLowerCase();

  //   let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  //   let flip = [...end].reverse().join("");

  //   if (start == flip) {
  //     result.innerHTML = `${word.toUpperCase()} is a palindrome!`;
  //   } else {
  //     result.innerHTML = `${word.toUpperCase()} is NOT a palindrome!`;
  //   }

  //Solution 2:
  let word = document.querySelector(".input-text").value.toLowerCase();
  if (word === word.split("").reverse().join("")) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome!`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome!`;
  }
}
