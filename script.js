gsap.registerPlugin(ScrollTrigger);

// dynamic header based on window position
ScrollTrigger.create({
    trigger: '.nav',
    start: 'top top',
    end: 99999,
    toggleClass: {className: 'pinned', targets: '.nav'},
});

ScrollTrigger.create({
    trigger: '#projects',
    start: 'top top',
    end: 99999,
    toggleClass: {className: 'opaque', targets: '.nav'},
});

ScrollTrigger.create({
    trigger: '#title',
    start: 'bottom 1%',
    endTrigger: '#footer',
    end: 'top 70%',
    toggleClass: {className: 'pinned-link', targets: '.link'},
});
