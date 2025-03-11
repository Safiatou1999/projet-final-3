document.addEventListener("DOMContentLoaded", function () {
    // Effet sur le formulaire
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            this.style.borderColor = "#007BFF";
        });

        input.addEventListener("blur", function () {
            this.style.borderColor = "#ccc";
        });
    });

    // Effet zoom sur les images
    const images = document.querySelectorAll(".zoom-effect");

    images.forEach(image => {
        image.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        image.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Message de confirmation après l'envoi du formulaire
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Merci ! Votre message a été envoyé.");
     });
  }
});
