function toggleText(id, buttonId) {
    const moreText = document.getElementById(id);
    const button = document.getElementById(buttonId);
    
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block"; // Show the additional text
        button.textContent = "Lexo me pak"; // Change button text to "Read Less"
    } else {
        moreText.style.display = "none"; // Hide the additional text
        button.textContent = "Lexo me shume"; // Change button text to "Read More"
    }
}

// Event listeners for buttons
document.getElementById('button-moreText').addEventListener('click', function() {
    toggleText('moreText', 'button-moreText');
});

document.getElementById('button-moreText2').addEventListener('click', function() {
    toggleText('moreText2', 'button-moreText2');
});
