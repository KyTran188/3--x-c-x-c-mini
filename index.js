console.log("Hello World");
document.querySelector(".myButton").addEventListener("click", function () {
  let answer;
  let myCheckBox = document.querySelector(".subscribeCheckBox");
  let visaBtn = document.querySelector(".visaBtn");
  let MasterCardBtn = document.querySelector(".MasterCardBtn");
  let paypalBtn = document.querySelector(".paypalBtn");
  if (myCheckBox.checked) {
    console.log("sucess");
  } else {
    console.log("not responding");
  }
  if (visaBtn.checked) {
    console.log("you are paying with visa");
    answer = "visa";
  } else if (MasterCardBtn.checked) {
    console.log("you are paying with master card");
    answer = "master card";
  } else if (paypalBtn.checked) {
    console.log("you are paying with paypal");
    answer = "paypal";
  } else {
    console.log("please chose in less one choice");
    answer = "you did not choose anything";
  }
  console.log(answer);
});
