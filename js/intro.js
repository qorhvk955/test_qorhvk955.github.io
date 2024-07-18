import { typewriter } from "./typewriter.js";

export const intro = () => {

    const intro = document.querySelector('.intro'),
          msg = document.querySelector(".intro-msg");

    const tl = gsap.timeline({ 
        onStart: () => { 
            console.log("intro-start");           
            intro.style.display = "flex";   
        }, 
        onComplete: () => { 
            intro.style.display = "none";  
            console.log("intro-end");          
            typewriter(); 
        }
    });
    
    

    tl.fromTo( msg, { y: 50, opacity: 0 }, { y: 0, opacity:1, duration: 2, delay: 3, ease: "power1.out", });
   
}
