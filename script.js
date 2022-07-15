gsap.registerPlugin(ScrollTrigger);

// pinned scroll effect for hero
ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    pin: true,
    pinSpacing: false,
});
  
ScrollTrigger.create({
    trigger: '#content',
    start: 'top top',
    end: 'top end',
    pin: true,
    pinSpacing: false,
});

// resizing of header when pinned
ScrollTrigger.create({
    trigger: '#content',
    start: 'top top',
    end: 'bottom bottom',
    toggleClass: {className: 'pinned', targets: '.nav'},
});
  
  ScrollTrigger.create({
    trigger: '#content',
    start: 'top top',
    end: 'bottom bottom',
    toggleClass: {className: 'pinned-link', targets: '.nav-link'},
});
  