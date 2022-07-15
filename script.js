gsap.registerPlugin(ScrollTrigger);

// resizing of header when pinned at top
ScrollTrigger.create({
    trigger: '.nav',
    start: 'top top',
    end: 99999,
    toggleClass: {className: 'pinned', targets: '.nav'},
});
  
ScrollTrigger.create({
    trigger: '#content',
    start: 'top top',
    end: 'bottom bottom',
    toggleClass: {className: 'pinned-link', targets: '.link'},
    markers: true,
});
