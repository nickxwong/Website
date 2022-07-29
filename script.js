gsap.registerPlugin(ScrollTrigger);

// dynamic header based on window position
ScrollTrigger.create({
    trigger: '.header',
    start: 'top top',
    end: 99999,
    toggleClass: {className: 'pinned', targets: '.header'},
});

ScrollTrigger.create({
    trigger: 'section#projects',
    start: 'top top',
    end: 99999,
    toggleClass: {className: 'opaque', targets: '.header'},
});

ScrollTrigger.create({
    trigger: 'section#title',
    start: 'bottom 1%',
    endTrigger: '#footer',
    end: 'top 70%',
    toggleClass: {className: 'pinned-link', targets: '.header > .link'},
});

// ScrollTo animations
document.querySelectorAll('.header > .link').forEach(link => {
    link.addEventListener('click', () => {
        gsap.to(window, {scrollTo: `#${link.textContent}`});    
    })
})