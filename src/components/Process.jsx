import { useEffect, useRef } from 'react';
import { steps } from '..';
import { animateProcessText, animateProcessList } from '../gsap/Animations';

function Process() {
  const processTextRef = useRef(null);
  const processListRef = useRef(null);

  useEffect(() => {
    if (processTextRef.current && processListRef.current) {
      animateProcessText(processTextRef.current);
      animateProcessList(processListRef.current, processTextRef.current);
    }
  }, []);

  return (
    <div className="  px-6 lg:px-32">

      <h1
        className="text-n-2 dark:text-n-1 block w-full font-semibold  text-3xl md:text-4xl text-left md:w-[60%] mb-16 process-text"
        ref={processTextRef}
      >
        My tried-and-true coding strategies
      </h1>
      <div className="grid gap-x-4 gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 process-list" ref={processListRef}>
        {steps.map((step, index) => (
          <div key={index}>
            <p className="font-semibold text-n-2 dark:text-n-1 text-sm mb-2">{`(0${index + 1})`}</p>
            <h1 className="font-semibold text-n-2 dark:text-n-1 text-3xl mb-4">{step.title}</h1>
            <p className="font-semibold text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
