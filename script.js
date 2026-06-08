/**
 * Testimonials Carousel Logic
 * Automatically cycles through testimonials every 5 seconds.
 */

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');

    // Ensure we have slides before running the interval
    if (slides.length > 0) {
        function showNextSlide() {
            // Remove 'active' class from current slide
            slides[currentSlide].classList.remove('active');

            // Calculate index for the next slide
            currentSlide = (currentSlide + 1) % slides.length;

            // Add 'active' class to the new slide
            slides[currentSlide].classList.add('active');
        }

        // Set the automatic transition timer (5000ms = 5 seconds)
        setInterval(showNextSlide, 5000);
    }
});