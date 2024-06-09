const form = document.querySelector("form");
const emailInput = document.getElementById("submitmail");
const btn = document.getElementById("btn");
const errort = document.querySelector(".errort");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    errort.style.display = "block";
  }

  if (!emailRegex.test(email)) {
    errort.style.display = "block";
    return;
  }

  form.submit();
});

emailInput.addEventListener("input", function () {
  errort.style.display = "none";
});
