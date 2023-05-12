var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})

var tl = gsap.timeline()
.from("#nav",{
    y : -100,
    opacity:0,
    duration : 1.2
}, "same")
.from("#nav-prt2",{
    scale : 2,
    opacity : 0,
    duration : 1.2
}, "same")
.from("#left",{
    x : -100,
    duration : 1.5,
    opacity : 0
}, "1.5")
.from("#right",{
    x : 100,
    duration : 1.5,
    opacity : 0
}, "1.5")
.from("#center", {
    scale : 2,
    duration : 0.9,
    opacity : 0
})
.from("#content>img",{
    opacity:0,
    scale : 0,
    duration:0.9,
})
