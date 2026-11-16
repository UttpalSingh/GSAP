let initialPath = `M 10 90 Q 250 90 490 90`
let finalPath = `M 10 90 Q 250 90 490 90`


let string = document.getElementById("string")

// string.addEventListener("mouseenter",(event)=>{
//     console.log(event);
    
// })

string.addEventListener("mousemove",(events)=>{
    path = `M 10 90 Q ${events.x} ${events.y} 490 90`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",(event)=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.3,
        ease:"elastic.out(1,0.2"
    })
    
})