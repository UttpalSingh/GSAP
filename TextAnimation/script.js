let h1 = document.querySelector("h1");


function breakText() {
  let h1Text = document.querySelector("h1").textContent;

  // break html text by using javascript

  let splittedText = h1Text.split("");
    let clutter = "";
    let textLength = Math.floor(splittedText.length/2)

  splittedText.forEach((e,idx) => {
    if(idx < textLength){
        clutter += `<span class="a">${e}</span>`;
        
    }
    else{
        clutter += `<span class="b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
  
}
breakText();



gsap.from(".a",{
    y:50,
    opacity:0,
    duration:0.5,
    delay:0.4,
    stagger:0.15,
    ease: "sine.out"
})
gsap.from(".b",{
    y:50,
    opacity:0,
    duration:0.5,
    delay:0.4,
    stagger:-0.15,
    ease: "sine.out"
})







// gsap.from("h1 span",{
//     y:50,
//     opacity:0,
//     duration:0.5,
//     delay:0.5,
//     stagger:0.2
// })