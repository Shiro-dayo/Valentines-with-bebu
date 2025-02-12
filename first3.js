document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const warningText = document.querySelector(".warning-text"); // Selects the warning text
    let noClickCount = 0;

    // List of warning messages
    const warningMessages = [
        "So you really want me to eat a wasabi?",
        "You cutiepie, you want me dead?!",
        "Please reconsider...!!",
        "Do you not love me?!"
    ];

    // When Yes button is clicked, go to next page
    yesButton.addEventListener("click", function () {
        window.location.href = "index4.html";
    });

    // When No button is clicked
    noButton.addEventListener("click", function () {
        noClickCount++;

        if (noClickCount < 5) {
            // Change warning text
            if (noClickCount <= warningMessages.length) {
                warningText.textContent = warningMessages[noClickCount - 1];
            }

            // Move the No button randomly
            const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
            const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
            noButton.style.position = "absolute";
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;

            // Make the Yes button bigger
            let newSize = 1 + noClickCount * 0.5; // Increases size gradually
            yesButton.style.transform = `scale(${newSize})`;

        } else {
            // On the 5th click, remove No button
            noButton.style.display = "none";

            // Make Yes button cover the screen
            yesButton.style.position = "absolute";
            yesButton.style.width = "100vw";
            yesButton.style.height = "100vh";
            yesButton.style.fontSize = "3rem";
            yesButton.style.borderRadius = "0"; // Removes rounded edges
        }
    });
});
