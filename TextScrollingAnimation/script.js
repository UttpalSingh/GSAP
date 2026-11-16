window.addEventListener("wheel", (events) => {
  if (events.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-100%)",
      duration: 1,
      repeat: -1,
      ease: "none",
    });
  } else {
    gsap.to(".marque",{
        transform:"transk"
    })
  } 
});
