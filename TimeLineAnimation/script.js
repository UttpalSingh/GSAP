let menu = document.querySelector("#nav i")
let cross = document.querySelector("#full i")

const tl = gsap.timeline()



tl.to("#full",{
    right:0,
    duration:0.8
})

tl.from("#full h2",{
    x:150,
    duration:0.7,
    stagger:0.2,
    opacity:0
})

tl.from("#full i",{
    opacity:0
}) 

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})
cross.addEventListener("click",()=>{
    // tl.to("#full",{
    //     right:'-40%'
    // })
    tl.reverse()
})