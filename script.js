function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var emailRegex = /\S+@\S+\.\S+/;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    } else if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    } else {
        document.getElementById('contactForm').reset(); // Reset form after successful submission
        document.getElementById('successMessage').style.display = 'block'; // Show success message
        setTimeout(function() {
            document.getElementById('successMessage').style.display = 'none'; // Hide success message after 3 seconds
        }, 3000);
        return true;
    }
}
// JavaScript for slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
