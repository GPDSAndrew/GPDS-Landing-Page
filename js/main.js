document.addEventListener("DOMContentLoaded", function() {
    barba.init({
        transitions: [{
            name: 'smooth-fade',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.8, // Slightly longer fade for smoothness
                    ease: "power2.inOut"
                });
            },
            enter(data) {
                window.scrollTo(0, 0);
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.8, // Matching fade-in duration for consistency
                    ease: "power2.inOut",
                });
            }
        }]
    });
});
