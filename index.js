
    let slideIndex = 0;
    let slideshowInterval;

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    function toggleSlideshow() {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        } else {
            slideshowInterval = setInterval(function() {
                plusSlides(1);
            }, 2000); // Change slide every 2 seconds
        }
    }

    function plusSlides(n) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;

        showSlides(slideIndex += n);
    }

    // Start slideshow on page load
    showSlides(slideIndex);
    toggleSlideshow();
