const start = document.querySelector(".start");
const Thankyou = document.querySelector(".Thank-you");
const submitbtn = document.getElementById("submitbtn");
const btnthank = document.getElementById("btn-rating");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
submitbtn.addEventListener("click", () => {
  Thankyou.classList.remove("hidden");
  start.style.display = "none";
});

btnthank.addEventListener("click", () => {
  Thankyou.classList.add("hidden");
  start.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
