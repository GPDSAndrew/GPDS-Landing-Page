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
            beforeEnter(data) {
                document.body.classList.add('index-background');
            },
            beforeLeave(data) {
                document.body.classList.remove('index-background');
            }
        },
        {
            namespace: 'about',
            beforeEnter(data) {
                document.body.classList.add('index-background');
            },
            beforeLeave(data) {
                document.body.classList.remove('index-background');
            }
        }]
    });
});
