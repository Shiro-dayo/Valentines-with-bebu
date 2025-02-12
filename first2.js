document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.querySelector(".heart-container");
    const nextButton = document.getElementById("nextButton");

    function createHeart() {
        const heart = document.createElement("img");
        heart.src = "heart.gif";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.width = "40px";
        heart.style.position = "absolute";
        heart.style.animation = "pulse 1s ease-in-out, fadeInOut 1.5s linear";
        
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
    
    setInterval(createHeart, 700);
    
    nextButton.addEventListener("click", function () {
        window.location.href = "index3.html";
    });
});
