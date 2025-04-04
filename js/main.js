// /js/main.js

document.addEventListener("DOMContentLoaded", function() {
    barba.init({
        transitions: [{
            name: 'fade',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.5
                });
            },
            enter(data) {
                window.scrollTo(0, 0);  // Ensure we start at the top
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.3 // Add a slight delay for smoothness
                });
            }
        }]
    });
});
