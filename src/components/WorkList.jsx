import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function WorkList() {
  const workRefs = useRef([]);

  // Define works data directly within this component
  const works = [
    { title: 'Project 1' },
    { title: 'Project 2' },
    { title: 'Project 3' },
    // Add more projects here
  ];

  useEffect(() => {
    // GSAP stagger animation for each work item
    gsap.fromTo(
      workRefs.current,
      {y: '100%', opacity: 0 },
      {
       y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3, // Stagger each item's animation by 0.3 seconds
      }
    );
  }, []);

  return (
    <div className="space-y-4">
      {works.map((work, index) => (
        <div
          key={index}
          ref={(el) => (workRefs.current[index] = el)}
          className="p-4 bg-gray-200 dark:bg-gray-800"
        >
          {work.title}
        </div>
      ))}
    </div>
  );
}

export default WorkList;
