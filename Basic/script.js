// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",

// })
// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
// })

// gsap.from("h1",{
//     opacity:0,
//     duration:4,
//     y:30,
//     delay:1,
//     stagger:1
// })

// gsap.to("#box",{
//     x:1200,
//     borderRadius:"50%",
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:Infinity,
//     yoyo:true
// })
// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
// })
// gsap.to("#box2",{
//     x:1200,
//     backgroundColor:"pink",
//     duration:2,
//     delay:3,
//     rotate:360,
// })
// gsap.to("#box3",{
//     x:1200,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:2,
//     delay:5
// })

// timeline
let tl = gsap.timeline()

tl.to("#box1",{
    x:1200,
    rotate:360,
    duration:3,
    delay:1
})
tl.to("#box2",{
    x:1200,
    backgroundColor:"pink",
    rotate:360,
    duration:3,
})
tl.to("#box3",{
    x:1200,
    rotate:360,
    duration:3,
    borderRadius:"50%"
})
