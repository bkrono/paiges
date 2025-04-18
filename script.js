document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navBar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function () {
        const mobileMenu = document.createElement("div");
        mobileMenu.classList.add("mobile-menu");

        mobileMenu.innerHTML = `
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products-services">Services</a>
            <a href="#contact">Contact</a>
        `;

        // Toggle the mobile menu
        if (document.body.contains(document.querySelector(".mobile-menu"))) {
            document.querySelector(".mobile-menu").remove();
        } else {
            navBar.appendChild(mobileMenu);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hero-content").classList.add("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-header");

    accordions.forEach(header => {
        header.addEventListener("click", function () {
            const parent = this.parentElement;
            const content = parent.querySelector(".accordion-content");

            // Close other accordions
            document.querySelectorAll(".accordion").forEach(acc => {
                if (acc !== parent) {
                    acc.classList.remove("active");
                    acc.querySelector(".accordion-content").style.display = "none";
                }
            });

            // Toggle current accordion
            if (parent.classList.contains("active")) {
                content.style.display = "none";
                parent.classList.remove("active");
            } else {
                content.style.display = "block";
                parent.classList.add("active");
            }
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        formStatus.innerHTML = "Please fill out all fields.";
        formStatus.style.color = "red";
        return;
    }

    formStatus.innerHTML = "Message sent successfully!";
    formStatus.style.color = "green";

    // Clear the form
    document.getElementById("contactForm").reset();
});


