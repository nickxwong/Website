gsap.registerPlugin(ScrollTrigger);

// dynamic header based on window position
ScrollTrigger.create({
    trigger: '.nav',
    start: 'top top',
    end: 99999,
    toggleClass: {className: 'pinned', targets: '.nav'},
});

ScrollTrigger.create({
    trigger: '#title',
    start: 'bottom 1%',
    endTrigger: '#content',
    end: 'bottom 99%',
    toggleClass: {className: 'pinned-link', targets: '.link'},
    markers: true,
});

const links = document.querySelectorAll('.link');
links.forEach((link, i) => {link.addEventListener('click', () => {
        console.log("clicked");
        links.forEach((link, i) => {link.classList.add('pinned-link')});
    });
});
