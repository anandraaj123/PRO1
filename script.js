// 1. Scroll Down
document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

// 2. Navbar Active Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let pos = window.scrollY + 120;
    sections.forEach(sec => {
        if (pos > sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            navLinks.forEach(a => a.classList.remove("active"));
            const active = document.querySelector(`.navbar a[href="#${sec.id}"]`);
            if (active) active.classList.add("active");
        }
    });
});

// 3. Resume Buttons
document.querySelector(".resume-btn").addEventListener("click", () => {
    window.open("Anand_Resume.pdf", "_blank");
});
document.querySelector(".nav-resume-btn").addEventListener("click", () => {
    window.open("Anand_Resume.pdf", "_blank");
});

// 4. Smooth Navbar Scroll
navLinks.forEach(link => {
    if (link.hash) {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({ behavior: "smooth" });
        });
    }
});

// 5. Live Project Buttons
document.querySelectorAll(".live-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const title = btn.previousElementSibling.previousElementSibling.innerText;
        const links = {
            "Comming Soon..": "#",
            "Habitual": "https://github.com/",
            "MetaLLica": "https://github.com/"
        };
        window.open(links[title] || "#", "_blank");
    });
});

// 6. Mobile Hamburger Menu
const hamburger = document.createElement("div");
hamburger.className = "hamburger";
hamburger.innerHTML = "☰";
document.body.appendChild(hamburger);

hamburger.addEventListener("click", () => {
    document.querySelector(".navbar ul").classList.toggle("show-menu");
});

// 7. Copy Contact Info
document.querySelectorAll(".contact-card span").forEach(span => {
    span.addEventListener("click", () => {
        navigator.clipboard.writeText(span.dataset.original);
        span.innerText = "Copied!";
        setTimeout(() => {
            span.innerText = span.dataset.original;
        }, 1200);
    });
});

// 8. Fade-in Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade, .about-wrapper, section").forEach(el => observer.observe(el));
