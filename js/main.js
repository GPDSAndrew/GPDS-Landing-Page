document.addEventListener("DOMContentLoaded", function() {
    barba.init({
        transitions: [{
            name: 'fade',
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0, duration: 0.6 });
            },
            enter(data) {
                window.scrollTo(0, 0); // Ensure we start at the top of the new page
                return gsap.from(data.next.container, { opacity: 0, duration: 0.6 });
            }
        }],
        views: [{
            namespace: 'index',
            beforeEnter(data) {
                document.body.classList.add('index-background');
            },
            beforeLeave(data) {
                document.body.classList.remove('index-background');
            }
        }]
    });
});
