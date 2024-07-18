export const scrollAnimation = () => {


    gsap.registerPlugin(ScrollTrigger);

    const scrollSection = document.querySelector(".scrollAnimation");
    scrollSection.style.display = "flex";

    // document.querySelector("body").style.height = "200vh";
    
    // const tl = gsap.timeline({
    //     onStart: () => { console.log( "scrollAnimation-start") },
    //     onComplete: () => { console.log("scrollAnimation-end")} 
    // });

    gsap.set("body", { height: "500vh"});
    gsap.set(".content-wrap", {display: "none" });
     

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".scrollAnimation",
            start: "top -=5",
            end: "+=3000",
            scrub: true,
            markers: true,
            toggleActions: "play pause resume reset",
            pin: true
        },
        onStart: () => { console.log("scrollAnimation-start") },
        onComplete: () => { console.log("scrollAnimation-end") }
    });

    tl.to(".about", { x: -1500 })
    .to(".me", { x: 15000 })
    .set(".content-wrap", { display: "" })

    .fromTo(".front", {scale: 0},{ scale: 1})
    .fromTo(".back", {scale: 0},{ scale: 1 },"<")

    .fromTo(".front", {scale: 1},{ scale: 1.2 })
    .fromTo(".back", {scale: 1},{ scale: 1.05 },"<")
    .set([".about", ".me"], { display: "none" },"<")
    .fromTo(".front", {scale: 1.2},{ scale: 1.4 })
    .fromTo(".back", {scale: 1.05},{ scale: 1.1 },"<")
    .fromTo(".front", {scale: 1.4},{ scale: 1.6 })
    .fromTo(".back", {scale: 1.1},{ scale: 1.15 },"<")
    .fromTo(".front", {scale: 1.6},{ scale: 1.8 })
    .fromTo(".back", {scale: 1.15},{ scale: 1.2 },"<")
    .fromTo(".front", {scale: 1.8},{ scale: 2 })
    .fromTo(".back", {scale: 1.2},{ scale: 1.25 },"<")
    .fromTo(".front", {scale: 2},{ scale: 4 })
    .fromTo(".back", {scale: 1.25},{ scale: 1.3 },"<")
    .fromTo(".front", {scale: 4},{ scale: 6 })
    .fromTo(".back", {scale: 1.25},{ scale: 1.3 },"<")

    // .fromTo(".front", {scale: 2},{ scale: 3 })
    // .fromTo(".back", {scale: 1.2},{ scale: 1.4 },"<")
    // .fromTo(".front", {scale: 3},{ scale: 4 })
    // .fromTo(".back", {scale: 1.4},{ scale: 1.6 },"<")
    // .fromTo(".front", {scale: 4},{ scale: 5 })
    // .fromTo(".back", {scale: 1.6},{ scale: 1.8 },"<")
  










}