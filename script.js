// Dropdown Menu
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle) { // Check if the element exists to avoid errors
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        dropdownToggle.parentNode.classList.toggle('active'); // Toggle 'active' class on the parent li
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (dropdownToggle && !dropdownToggle.parentNode.contains(event.target) && dropdownToggle.parentNode.classList.contains('active')) {
        dropdownToggle.parentNode.classList.remove('active');
    }
});


// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

if (hamburger) { // Check if the element exists
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}


// Accordion
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (isValid) {
            formSuccess.textContent = 'Message sent successfully!';
            contactForm.reset();
            setTimeout(() => {
                formSuccess.textContent = '';
            }, 3000);
        }
    });
}


// Image Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length > 0) { // Check if there are slides to avoid errors
      slides[slideIndex-1].style.display = "block";
      if (dots.length > 0) { // Check if there are dots to avoid errors
          dots[slideIndex-1].className += " active";
      }
  }
}

// Automatic Slider (Optional - you can uncomment to enable auto slide)
// setInterval(() => {
//     plusSlides(1);
// }, 5000); // Change image every 5 seconds