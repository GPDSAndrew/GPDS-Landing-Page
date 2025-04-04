document.addEventListener("DOMContentLoaded", function() {
    barba.init({
        transitions: [{
            name: 'fade',
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0, duration: 0.6 });
            },
            enter(data) {
                window.scrollTo(0, 0);
                return gsap.from(data.next.container, { opacity: 0, duration: 0.6 });
            }
        }],
        views: [{
            namespace: 'index',
            afterEnter() {
                document.body.classList.add('index-background');
            }
        },
        {
            namespace: 'about',
            afterEnter() {
                document.body.classList.add('index-background');
            }
        }]
    });
});
