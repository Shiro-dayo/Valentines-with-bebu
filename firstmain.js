document.addEventListener("DOMContentLoaded", function() {
    const clickButton = document.getElementById("clickButton");
    
    if (clickButton) {
        clickButton.addEventListener("click", function() {
            window.location.href = "index2.html";
        });
    }
});
