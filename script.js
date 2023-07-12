$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Form submission
    $('#contact-form').on('submit', function(event) {
      event.preventDefault();
      // Perform form submission logic here
    });
  });
  