console.log("Hello World");

document.querySelector(".buttonSumit").addEventListener("click", function () {
  let temp = Number(document.querySelector(".input").value);
  let Cunit = document.querySelector(".Cunit");
  let Funit = document.querySelector(".Funit");
  let output = document.querySelector(".tempLabel");
  if (Cunit.checked) {
    temp = toC(temp);
    output.innerHTML = `answer is ${temp}°C`;
  } else if (Funit.checked) {
    temp = toF(temp);
    output.innerHTML = `answer is ${temp}°F`;
  } else {
    output.innerHTML = "Select a unit Please";
  }
});
function toC(temp) {
  return (temp - 32) * (5 / 9);
}
function toF(temp) {
  return (temp * 9) / 5 + 32;
}
