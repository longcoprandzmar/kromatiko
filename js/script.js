document.addEventListener("DOMContentLoaded", function () {

  // Contact form validation and thank-you alert
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    });
  }

  // Buy Now button alerts
  const buyButtons = document.querySelectorAll(".btn-buy");
  buyButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      alert("This item has been added to your cart!");
    });
  });

  // Message Your Request button scroll
  const messageButton = document.querySelector(".btn-message");
  if (messageButton) {
    messageButton.addEventListener("click", function (e) {
      e.preventDefault();
      const contactSection = document.querySelector("#contactForm");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Highlight active navbar link
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPage = location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

});
