let main = document.getElementById("main")
let cursor = document.getElementById("cursor")
let image = document.getElementById("image")

main.addEventListener("mousemove",(events)=>{
    gsap.to(cursor,{
        x:events.x,
        y:events.y,
        duration:1,
        ease:"back.out(1.7)"
    })
    
})

image.addEventListener("mouseenter",(events)=>{
    cursor.innerHTML = "Read More"
    gsap.to(cursor,{
        scale:4
    })
})
image.addEventListener("mouseleave",(events)=>{
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1
    })
})