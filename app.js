const header = document.querySelector("header");
const main = document.querySelector("main");

gsap.to(header, { duration: 2.5, ease: "bounce.out", y: -20 });


gsap.from(main, {delay : 2.5 , duration: 4,opacity : 0 });

