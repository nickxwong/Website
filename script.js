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