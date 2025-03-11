// Smooth scrolling for navigation
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Image hover effect
document.querySelectorAll(".movie").forEach(movie => {
    movie.addEventListener("mouseenter", () => {
        movie.style.transform = "scale(1.05)";
        movie.style.transition = "transform 0.3s ease";
    });

    movie.addEventListener("mouseleave", () => {
        movie.style.transform = "scale(1)";
    });
});

// Responsive navigation menu toggle (For mobile)
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector("header").appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
});


// Add hover effect to reviews dynamically
document.querySelectorAll(".review-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// Animate the section when scrolling into view
const reviewsSection = document.querySelector(".reviews-section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            reviewsSection.style.opacity = "1";
            reviewsSection.style.transform = "translateY(0)";
            reviewsSection.style.transition = "opacity 1s ease, transform 1s ease";
        }
    });
}, { threshold: 0.3 });

reviewsSection.style.opacity = "0";
reviewsSection.style.transform = "translateY(30px)";
observer.observe(reviewsSection);
