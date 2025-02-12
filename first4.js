document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.querySelector(".heart-container");
    const nextButton = document.getElementById("nextButton");

    function createHeart() {
        const heart = document.createElement("img");
        heart.src = "heart2.gif";
        heart.classList.add("heart");
        
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        
        heart.style.width = Math.random() * 40 + 20 + "px";
        
        heart.style.animation = "pulseFade 1.5s infinite ease-in-out";
        
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    setInterval(createHeart, 500);

    // Button navigation
    nextButton.addEventListener("click", function () {
        window.location.href = "index5.html";
    });
});
