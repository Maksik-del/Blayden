gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-container div").forEach((letter, i) => {
  gsap.to(letter, {
    scrollTrigger: {
      trigger: letter,
      start: "top 80%",
      end: "top 80%",
      scrub: true,
    },
    opacity: 1,
    duration: 1
  });
});