const start = document.querySelector(".start");
const Thankyou = document.querySelector(".Thank-you");
const submitbtn = document.getElementById("submitbtn");
//const btnthank = document.getElementById("btn-rating");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
submitbtn.addEventListener("click", () => {
  Thankyou.classList.remove("windows");
  start.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
