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
    endTrigger: '#content',
    end: 'bottom 99%',
    toggleClass: {className: 'pinned-link', targets: '.link'},
});

// highlights current section in nav
document.querySelectorAll('section:not(#title)').forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top 1%',
        end: 'bottom top',
        toggleClass: {className: 'current', targets: `a[href=\'#${section.id}\']`},
    })
})