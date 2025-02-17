import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headerTextRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const headerText = headerTextRef.current;
    const image = imageRef.current;

    const headerAnimation = gsap.to(headerText, {
      scrollTrigger: {
        trigger: headerText,
        start: "top 20%",
        pin: true,
        pinSpacer: false,
        scrub: true,
      },
      opacity: 0,
      scale: 0.5,
      ease: "none",
    });
    const imageAnimation = gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: "top 60%", // when the top of the image hits the bottom of the viewport

        scrub: true,
        // markers: true,
        pinSpacer: false,

      },

      ease: "power1.out",
      scale: 1.2
    });
    
    return () => {
      // Clean up the animation and ScrollTrigger instances

      imageAnimation.kill();
      headerAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  useEffect(() => {
    // const text1 = headerTextRef.current.querySelector('.text1');
    const text2 = headerTextRef.current.querySelector('.text2');
    const text3 = headerTextRef.current.querySelector('.text3');
    const smallText2 = headerTextRef.current.querySelector('.sText-2');

    const textAnimation = gsap.timeline({
      defaults: {
        duration: 0.8,
        stagger: 0.1,
        opacity: 0,
        // y: 0,
        ease: 'power3.out'
      }
    })
    // textAnimation.from(text1, {
    //   y: 100
    // });
    textAnimation.from(text2, { y: 100 }, "-=0.5");
    textAnimation.from(text3, { y: 100 }, "-=0.5");
   
    // gsap.from(smallText1, {
    //   x: -100,
    //   delay: 1,
    //   opacity: 0
    // })
    gsap.from(smallText2, {
      // alignContent: center,
      delay: 1,
      opacity: 0
    })
  }, [])
  return (
    <section id="hero" className="container mx-auto w-full relative py-10 px-6 lg:px-32 lg:py-20">
      <div className="flex flex-col items-center justify-center h-full  container">
        {/* fix header animation */}
        <div className="header-txt w-full" ref={headerTextRef}>
          <h1 className=" overflow-hidden flex flex-col -space-y-1.5 items-center justify-center text-5xl font-semibold uppercase z-20 md:text-7xl lg:text-[120px]  text-n-2 dark:text-n-1" >
            {/* <div className="overflow-hidden  h-30 block">
              <span className="tracking-[-4px] block text1">React</span>
            </div> */}
            <div className="overflow-hidden  h-30  block">
              <span className="tracking-[-4px] block  text2">Front-end</span>
            </div>
            <div className="overflow-hidden  block">
              <span className="tracking-[-4px] text3 block">Developer&copy;</span>
            </div>
          </h1>
          <div className="  flex flex-col items-center mt-2 space-y-2 justify-center font-semibold  text-n-2 dark:text-n-1">
            <h5 className="flex text-center uppercase flex-col text-[0.8rem] md:text-left sText-2">{`(2022 - Present)`}</h5>
          </div>
        </div>
        <div
          ref={imageRef}
          className="lg:w-[30%] w-[45%] h-[60%]  mt-40 shadow image relative  overflow-hidden rounded-3xl"
        >
          <img
            className="w-full h-full object-cover object-center align-middle"
            src="/../assets/profilePic.jpg"
            alt="Nafisa Faruna's Picture"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
