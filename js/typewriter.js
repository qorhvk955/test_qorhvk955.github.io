import { scrollAnimation } from "./scrollAnimation.js";

export const typewriter = () => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(Observer);

    const typewriter = document.querySelector(".typewriter"),
          scroll = document.querySelector(".scroll-downs"),
          texts = ["선생님", "늘", "감사합니다"];
    
    let index = 0;
    let observerInstance;

    function typewriterAni(text) {
        const timeline = gsap.timeline({
            onStart: () => {
                if (index === 0) {
                    typewriter.style.display = "flex";
                    console.log("시작");
                }
            },
            onComplete: () => {
                index++;

                if (index < texts.length) {
                    gsap.delayedCall(0.2, () => {
                        timeline.timeScale(3);
                        timeline.reverse().eventCallback("onReverseComplete", () => {
                            typewriterAni(texts[index]);
                        });
                    });
                }else {
                    gsap.fromTo( scroll, { display: "block", opacity: 0 }, { opacity: 1, duration: 0.5, delay: 1, onComplete: () => { createObserver() }});                    
                }
            }
        });

        setTypewriterAnimation(text);

        timeline.to(".typewriter-msg", {
            duration: text.length * 0.2,
            text: text,
            ease: "steps(" + text.length + ")"
        }).play();
    }

    function setTypewriterAnimation(text) {
        gsap.fromTo(".typewriter-msg", {
            "border-right-color": "rgba(255, 255, 255, 0.75)"
        }, {
            "border-right-color": "rgba(255, 255, 255, 0)",
            repeat: -1,
            duration: 0.5,
            ease: "steps(" + text.length + ")"
        }, 0);
    }

    function createObserver() {
        observerInstance = Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: 1,
            onDown: () => {
                if( index === texts.length) {
                    typewriter.style.display = "none"
                    if (observerInstance) observerInstance.kill();
                    gsap.killTweensOf(".typewriter-msg");
                    scrollAnimation();
                }
            },

            tolerance: 10,
            preventDefault: true
        });
    }

    typewriterAni(texts[index]);
};
