function toggleText(id, buttonId) {
    const moreText = document.getElementById(id);
    const button = document.getElementById(buttonId);
    
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block"; 
        button.textContent = "Lexo me pak"; 
    } else {
        moreText.style.display = "none"; 
        button.textContent = "Lexo me shume"; 
    }
}


document.getElementById('button-moreText').addEventListener('click', function() {
    toggleText('moreText', 'button-moreText');
});

document.getElementById('button-moreText2').addEventListener('click', function() {
    toggleText('moreText2', 'button-moreText2');
});
