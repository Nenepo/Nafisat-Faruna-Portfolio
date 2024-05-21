import Button from './Button';
import { experience, steps } from '..';
import Section from './Section';

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const headerTextRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById('hero').offsetHeight
    const imgHeight = document.querySelector('.image').offsetHeight
    const headerText = headerTextRef.current;
    const image = imageRef.current;
    
    gsap.to(headerText, {
      scrollTrigger: {
        trigger: headerText,
        start: 'top 10%',
        markers: true, 
        pin: true,
        pinSpacer: false,
        scrub: true
      },
       opacity: 0.5,
       delay: 2
    })
  //  const textAnimation = gsap.to(headerText,{
  //   scrollTrigger:{
  //     trigger: headerText,
  //     start: '+=30%',
  //     end: `+=${imgHeight}`,
  //     scrub: true,
  //     pin: true,
  //     markers: true
  //     // toggleActions: 'play reverse play reverse', 
    
  //   }
  //  })
  //  console.log('animation')
      // textAnimation.to(headerText, {
       
      //    scale: 0.5,
      //    opacity: 0,
      //    perspective: 1200
      //   }
      // );

      // gsap.to(image,  
      //   {
      //     y: -100,
      //     perspective: 1200,
         
      //     scrollTrigger: {
      //       trigger: image,
      //       start: 'top bottom',
      //       end: `+=${hero}`,
      //       scrub: true,
          
      //     },
      //   }
      // );
      // gsap.to(image,  
      //   {
      //     scale: 1.2,
      //     scrollTrigger: {
      //       trigger: image,
      //       start: 'top bottom',
      //       end: `+=${hero}`,
      //       scrub: true,
      //       onEnter: () => gsap.to(image, {scale: 1}),
      //       onLeaveBack: () => gsap.to(image, {scale: 1.2}),
      //     },
      //   }
      // );
    
  }, []);

  return (
    <Section id='hero' className=''>
      <div className='flex flex-col items-center justify-center h-full mt-[20%] container' ref={headerTextRef}>
        <div className="header-txt border" >
          <h1 className='text-n-1 flex flex-col space-y-[-7px] items-center justify-center text-5xl font-bold uppercase tracking-tight z-20 md:text-7xl lg:text-8xl'>
            <span>React</span><span>Front-end</span><span>Developer&copy;</span>
          </h1>
          <div className='text-n-1 flex flex-col items-center mt-2 space-y-2 justify-center font-semibold md:items-stretch md:flex-row md:justify-between md:space-x-10 lg:space-x-24'>
            <h5 className='flex text-center uppercase flex-col md:text-left'>Currently crafting <span className='mt-[-8px]'> experiences from my bed 😁</span></h5>
            <h5 className=''>{`(2022 - Present)`}</h5>
          </div>
        </div>

        <div ref={imageRef} className='w-[30%] h-[50%] mt-12 shadow image'>
          <img className=' object-cover overflow-hidden rounded-[10%]' src="../src/assets/profilePic.jpg" alt="Nafisa Faruna's Picture" />
        </div>
      </div>
      <div>
        <h1>I love making cool things and solving complex problems for people — like you.</h1>
        <h1>I deliver impactful results through strategic thinking and data-driven insights.</h1>
      </div>
      <div><img src="" alt="" /></div>
      <div>
        <h1>My tried-and-true coding process</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {steps.map((step, index) => (
            <div key={index}>
              <p className='font-semibold'>{`(${step.index})`}</p>
              <h1 className='font-bold'>{step.title}</h1>
              <p className='font-semibold text-neutral-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="work">
        <h1>Relevant Experience</h1>
        {experience.map((item, index) => (
          <div key={index}>
            <h1>{item.companyTitle}</h1>
            <h2>{item.position}</h2>
            <p>{item.date}</p>
            <p>{item.workDone}</p>
          </div>
        ))}
        <div className='flex justify-start'>
          <button className='bg-n-1 text-n-2 outline-none border-none rounded-full px-4 py-4 hover:bg-neutral-600'>View work</button>
          <button className='bg-n-2 text-n-1 font-semibold border-1 border-n-1 outline-none border-none rounded-full px-4 py- hover:text-neutral-600 hover:border-neutral-600'>
            view resume
          </button>
        </div>
      </div>
      <footer className='bg-n-2'>
        <h4 className='text-n-1 font-semibold'>Think I'd be a good fit for your team or project? Let's connect.</h4>
        <Button href="mailto:nafisafaruna@gmail.com" text="nafisafaruna@gmail.com" className={`text-sm transition-colors hover:bg-n-1/60 font-[500]`}></Button>
        <div>
          <h2>SELECTED PROJECTS</h2>
          <a href="#">Crosby: POS Tool Launch</a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
        <div>
          <FaLinkedin /> <a>  Linkedin</a>
          <a> <FaXTwitter />X{'(Twitter)'}</a>
        </div>
        <div>
          <h4>Nafisat Faruna</h4>
          <p>React developer but to be honest being a developer is about adapting to the frame works as far as you have a good foundational earning</p>
          <img src="../src/assets/black woman.jpg" alt="" />
        </div>
      </footer>
    </Section>
  );
}

export default Hero;
