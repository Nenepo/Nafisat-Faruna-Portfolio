

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
  export const animateAboutText1 = (element) => {
    gsap.fromTo(element, { opacity: 0, y: 20 }, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  };
  
  export const animateAboutText2 = (element1, element2) => {
    gsap.fromTo(element1, { opacity: 0, y: 50 }, {
      scrollTrigger: {
        trigger: element1,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        onEnter: () => gsap.to(element2, { opacity: 0, y: -20, duration: 1, ease: "power1.out" }),
        onEnterBack: () => gsap.to(element2, { opacity: 1, y: 0, duration: 1, ease: "power1.in" }),
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  };
  
  export const animateProcessText = (element) => {
    gsap.fromTo(element, { opacity: 0, y: 20 }, {
      scrollTrigger: {
        trigger: element,
        start: "bottom 90%",
        markers: true,  // Debugging markers
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    });
  };
  
  export const animateProcessList = (element, triggerElement) => {
    gsap.fromTo(element, { opacity: 0, y: 20 }, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 30%",
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
  };
  
  export const animateRelevantExperience = (relevantText, experienceText, workList, triggerElement) => {
    gsap.fromTo(relevantText, { y: 100 }, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 50%",
      },
      y: 0,
      duration: 1,
    });
  
    gsap.fromTo(experienceText, { y: 100 }, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 50%",
      },
      y: 0,
      duration: 2,
    });
  
    gsap.fromTo(workList, { opacity: 0, y: 20 }, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 20%",
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
    });
  }