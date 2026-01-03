document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#navlinks a");

  navLinks.forEach(link => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  }
});
const navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {

  if (window.scrollY > 40) {
    navbar.classList.add('stuck');
  } else {
    navbar.classList.remove('stuck');
  }
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuItems = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('menu-active');
});

// Update mobile menu items click event
mobileMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-active');

    const targetId = event.target.getAttribute('href');

    // Use your existing smooth scroll function for anchor links
    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    } else {
      // For external pages, navigate after a delay
      setTimeout(() => {
        window.location.href = targetId;
      }, 200);
    }
  });
});

// Close mobile menu when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-active');
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-active');
  }
});

window.onscroll = function () {
  const mobileMenu = document.getElementById('mobile-menu');
  if (window.scrollY > 50) {
    mobileMenu.classList.remove('active');
  }
};

window.addEventListener('scroll', () => {
  const orderForm = document.getElementById('order-form');
  const productList = document.querySelector('table');
  const productListRect = productList.getBoundingClientRect();

  if (window.scrollY > productListRect.bottom) {
    orderForm.style.top = '20px';
    orderForm.style.position = 'sticky';
  } else {
    orderForm.style.position = 'static';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("order-button");

  button.addEventListener("click", function () {
    const url = "pages/porudzbina.html";

    window.location.href = url;
  });
});

function validateForm() {
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('name-error');

  const email = document.getElementById('email').value;
  const emailError = document.getElementById('email-error');

  const message = document.getElementById('message').value;
  const messageError = document.getElementById('message-error');

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    document.querySelector("#name").style.borderColor = "red";
    nameError.textContent = "Molimo Vas da pravilno unesite svoje ime";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    document.querySelector("#email").style.borderColor = "red";
    emailError.textContent = "Molimo Vas da unesete važeću email adresu";
    isValid = false;
  }

  if (message === "" || message.length > 80) {
    document.querySelector("#message").style.borderColor = "red";
    messageError.textContent = "Molimo Vas da unesete poruku kraću od 80 karaktera";
    isValid = false;
  }


  return isValid;
}

document.addEventListener("DOMContentLoaded", function () {
  const descriptions = document.querySelectorAll(".image-description");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.2
  });

  descriptions.forEach((description) => {
    observer.observe(description);
  });
});