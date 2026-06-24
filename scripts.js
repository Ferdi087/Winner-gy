// Simple GSAP animations to make the page lively

window.addEventListener('load',()=>{
  const { gsap } = window;
  // Intro animation
  gsap.from('.logo', {duration:0.8, y:-20, opacity:0, ease: 'power3.out'});
  gsap.from('.nav a', {duration:0.8, y:-10, opacity:0, stagger:0.08, delay:0.1});
  gsap.from('.cta', {duration:0.9, scale:0.9, opacity:0, delay:0.15, ease:'elastic.out(1,0.6)'});

  gsap.from('.kicker', {duration:0.9, x:-30, opacity:0, delay:0.2});
  gsap.from('.title', {duration:1.2, y:20, opacity:0, delay:0.32});
  gsap.from('.lead', {duration:1.2, y:6, opacity:0, delay:0.46});

  // can pop and shimmer
  gsap.from('.can', {duration:1.6, scale:0.88, opacity:0, ease:'power4.out', delay:0.4});
  gsap.to('.glow', {duration:2.8, scale:1.08, opacity:0.95, repeat:-1, yoyo:true, ease:'sine.inOut'});

  // feature cards
  gsap.from('.features article', {duration:1, y:12, opacity:0, stagger:0.12, delay:0.6});
  gsap.from('.card', {duration:1, y:12, opacity:0, stagger:0.08, delay:0.7});

  // subtle interactions
  document.querySelectorAll('.card, .features article').forEach(el=>{
    el.addEventListener('mouseenter', ()=>gsap.to(el,{scale:1.02, duration:0.35, ease:'power3.out'}));
    el.addEventListener('mouseleave', ()=>gsap.to(el,{scale:1, duration:0.35, ease:'power3.out'}));
  });

  // CTA bounce
  gsap.to('.cta',{y:-6, repeat:-1, yoyo:true, duration:1.6, ease:'sine.inOut', delay:1.6});

  // smooth scroll for nav
  document.querySelectorAll('.nav a').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

});
