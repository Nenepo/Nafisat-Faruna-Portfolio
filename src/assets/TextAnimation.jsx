import { useEffect } from 'react';
import gsap from 'gsap';

function TextAnimation({ openNavigation }) {
  useEffect(() => {
    if (openNavigation === true) {
      const lines = gsap.utils.toArray('.line');

      gsap.from(lines, {
        y: 0,
        duration: 1,
        yPercent: 100,
        ease: 'power4.inOut',
        stagger: 0.1,
        delay: 0.2
      });
      
    }
  }, [openNavigation]);

  return null;
}


export default TextAnimation;
