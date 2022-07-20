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
    end: 'bottom 99%',
    toggleClass: {className: 'pinned-link', targets: '.link'},
});

// highlights current section in nav
// projects
ScrollTrigger.create({
    trigger: '#content',
    start: 'top top',
    endTrigger: '#about',
    end: 'bottom 90%',
    toggleClass: {className: 'current', targets: 'a[href=\'#projects\']'},
    // markers: true,
});

// about
ScrollTrigger.create({
    trigger: '#about',
    start: 'bottom 90%',
    endTrigger: '#footer',
    end: 'bottom bottom',
    toggleClass: {className: 'current', targets: 'a[href=\'#about\']'},
    // markers: true,
});

// contact
ScrollTrigger.create({
    trigger: '#contact',
    start: 'top 31%',
    toggleClass: {className: 'current', targets: 'a[href=\'#contact\']'},
});