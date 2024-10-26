

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


  export const animateAboutText1 = (element) => {
    gsap.fromTo(element, { opacity: 0, y: 20 }, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 10%",
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
        start: "bottom 80%",
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
  
  // export const animateRelevantExperience = (relevantText, experienceText, workList, triggerElement) => {
  //   gsap.fromTo(relevantText, { y: 100 }, {
  //     scrollTrigger: {
  //       trigger: triggerElement,
  //       start: "top 50%",
  //     },
  //     y: 0,
  //     duration: 1,
  //   });
  
  //   gsap.fromTo(experienceText, { y: 100 }, {
  //     scrollTrigger: {
  //       trigger: triggerElement,
  //       start: "top 50%",
  //     },
  //     y: 0,
  //     duration: 2,
  //   });
  
  //   gsap.fromTo(workList, { opacity: 0, y: 20 }, {
  //     scrollTrigger: {
  //       trigger: triggerElement,
  //       start: "top 20%",
  //     },
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.5,
  //   });
  // }

  export const animateRelevantExperience = (relevantText, experienceText, workList, triggerElement) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "bottom 60%",
        // end: "bottom top",
        scrub: true,
      },
    });
  
    // Animate "Relevant" text
    timeline.fromTo(
      relevantText,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  
    // Animate "Experience" text
    timeline.fromTo(
      experienceText,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5" // overlap by 0.5 seconds with the previous animation
    );
  
    // Animate each work item in the work list
    timeline.fromTo(
      workList.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.4 },
      "-=0.5" // overlap by 0.5 seconds with the previous animation
    );
  };



  // export const animateRelevantExperience = (relevantText, experienceText, workList, triggerElement) => {
  //   gsap.fromTo(relevantText, { y: 100 }, {
  //         scrollTrigger: {
  //           trigger: triggerElement,
  //           start: "top 50%",
  //         },
  //         y: 0,
  //         duration: 1,
  //       });
      
  //       gsap.fromTo(experienceText, { y: 100 }, {
  //         scrollTrigger: {
  //           trigger: triggerElement,
  //           start: "top 50%",
  //         },
  //         y: 0,
  //         duration: 2,
  //       });
  
  //   // Staggered animation for each work item in the work list
  //   gsap.fromTo(
  //     workList.children,
  //     { opacity: 0, y: 20 },
  //     {
  //       scrollTrigger: {
  //         trigger: triggerElement,
  //         start: "top 40%",
  //       },
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.5,
  //       stagger: 0.2, // Staggering the animation of work items
  //       ease: "power2.out",
  //     }
  //   );
  // };