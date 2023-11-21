import gsap from "gsap"

const timeline = gsap.timeline({ defaults: { duration:1 } });
timeline.fromTo(".zoro", { y: "100%" }, { y: "0%" } , .5)
timeline.fromTo("nav", { scale: 0 }, { scale: 1 }, 1)
timeline.fromTo(".discover", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1 },1.5)
timeline.fromTo(".tabbar", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1 },1.5)
timeline.fromTo(".tab", { y: "-100%", x: "-100%", opacity: 0 }, { y: "0%", x: "0%", opacity: 1 },1.5)
timeline.fromTo(".p-1", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1 },1.5)