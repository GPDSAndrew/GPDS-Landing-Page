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
                window.scrollTo(0, 0);  // Force scroll to the top when loading new page
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5
                });
            }
        }]
    });
});
