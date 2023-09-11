document.addEventListener("click", function(event) {
    if (event.target.matches('[data-toggle="lightbox"]')) {
      event.preventDefault();
      // Assuming you have a function called ekkoLightbox
      ekkoLightbox();
    }
  });