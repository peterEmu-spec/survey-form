const form = document.getElementById("surveyForm");
form.addEventListener("submit", function (event) {
                event.preventDefault();
})
submitBtn.addEventListener("click", () => {
  console.log("your form has been submitted");
  alert("form submitted");
});
