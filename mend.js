document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");

    function fadeInElements() {
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    fadeInElements(); // Анх ачааллахад
    window.addEventListener("scroll", fadeInElements); // Гүйлгэх үед
});
