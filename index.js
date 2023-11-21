function validateDateOfBirth() {
  var dobInput = document.getElementById("dob");
  var dobValue = new Date(dobInput.value);
  var currentDate = new Date();
  var minDate = new Date(
    currentDate.getFullYear() - 55,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  //for date

  var maxDate = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  if (dobValue < minDate || dobValue > maxDate) {
    alert("DOB age must be between 18 and 55 years.");
    dobInput.value = "";
  } else {
    alert("Valid Age.");
  }
}

//for data

function loadSavedData() {
  var savedData = JSON.parse(localStorage.getItem("registrationData")) || [];
  var tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  savedData.forEach(function (data) {
    var row = tableBody.insertRow();
    for (var key in data) {
      var cell = row.insertCell();
      cell.textContent = data[key];
    }
  });
}
// for registration form

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //for what we display....

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var acceptTerms = document.getElementById("acceptTerms").checked;

    // for mapping data
    var formData = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      acceptTerms: acceptTerms,
    };

    //for storing data.....

    var savedData = JSON.parse(localStorage.getItem("registrationData")) || [];
    savedData.push(formData);
    localStorage.setItem("registrationData", JSON.stringify(savedData));
    loadSavedData();
    validateDateOfBirth();
  });
window.onload = loadSavedData;
