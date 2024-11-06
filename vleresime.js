document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("opinion-form");
    const nameInput = document.getElementById("name");
    const opinionTextarea = document.getElementById("opinion");
    const errorMessageDiv = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        let errorMessage = "";
        if (nameInput.value.trim() === "") {
            errorMessage += "Ju lutemi shkruani emrin tuaj.<br>";
        }
        if (opinionTextarea.value.trim() === "") {
            errorMessage += "Ju lutemi shkruani opinionin tuaj.";
        }

        if (errorMessage) {
            event.preventDefault(); // Prevent form submission
            errorMessageDiv.innerHTML = errorMessage; // Display error message
            errorMessageDiv.style.display = "block"; // Show the error message div
        } else {
            errorMessageDiv.style.display = "none"; // Hide the error message if no errors
        }
    });
});
