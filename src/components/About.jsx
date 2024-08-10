import { animateAboutText1, animateAboutText2 } from '../gsap/Animations';
import { useEffect } from 'react';
function About() {
  useEffect(() => {
    const aboutText1 = document.querySelector('.about-text1');
    const aboutText2 = document.querySelector('.about-text2');

    animateAboutText1(aboutText1);
    animateAboutText2(aboutText2, aboutText1);
  })
  return (
    <div id="about" className="space-y-20 px-6 lg:px-32  w-full mx-auto md:w-[80%]">
    <h1 className="about-text1 text-n-2 dark:text-n-1 font-semibold text-3xl md:text-4xl text-center">
      I love making cool things and solving complex problems for people — like you.
    </h1>
    <h1 className="about-text2 text-n-2 dark:text-n-1 font-semibold text-3xl md:text-4xl text-center">
      I deliver impactful results through strategic thinking and data-driven insights.
    </h1>
  </div>
  )
}

export default About