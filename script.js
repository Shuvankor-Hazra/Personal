const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  const nameField = document.getElementById("contactName");
  const emailField = document.getElementById("contactEmail");
  const messageField = document.getElementById("contactMessage");
  const errorDiv = document.getElementById("error-div");

  const nameValue = nameField.value;
  const emailValue = emailField.value;
  const messageValue = messageField.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    errorDiv.innerHTML = "";
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
    console.log(nameValue, emailValue, messageValue);
    // emailjs.send(
    //   "service_test",
    //   "template_ukn2w4o",
    //   templateParams,
    //   "3xd1VyeW9RbKVVGor"
    // );
  } else {
    errorDiv.innerHTML = "<p>Please fill all empty box</p>";
  }
});
