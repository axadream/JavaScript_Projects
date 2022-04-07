const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);

generateColor();

//this is base 16: it will contain a string of 0-9 and a -f
//.substring(x,y) is a method to select a list of characters x -first character, y the last character

// let color = Math.random().toString(16).substring(2,8);

// console.log(color);
