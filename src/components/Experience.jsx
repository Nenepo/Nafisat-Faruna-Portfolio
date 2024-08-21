import { experience } from '..';
import { useEffect, useRef } from 'react';
import { animateRelevantExperience } from '../gsap/Animations';
import { Link } from 'react-router-dom';
function Experience() {
  const relevantExperienceRef = useRef(null);
  const relevantTexttRef = useRef(null);
  const experienceText = useRef(null);
  const workListRef = useRef(null);

  useEffect(() => {
    const relevantText = document.querySelector('.relevant-text');
    const experienceText = document.querySelector('.experience-text');
    const workList = workListRef.current;
    const relevantExperienceText = relevantExperienceRef.current;

    animateRelevantExperience(relevantText, experienceText, workList, relevantExperienceText);
  }, [])


 
  return (
    <div>
      <div id="work" className="mt-28 pb-20">
        <h1 className="text-n-2 dark:text-n-1  text-5xl font-semibold uppercase  md:text-8xl lg:text-[120px] tracking-[-4px] leading-tight  px-6 lg:px-32" style={{ lineHeight: '0.8' }} ref={relevantExperienceRef}>
          <div className="overflow-hidden  h-30 block">
            <span className="tracking-[-4px] block relevant-text">Relevant</span>
          </div>
          <div className="overflow-hidden  h-30  block">
            <span className="tracking-[-4px] block  experience-text">Experience</span>
          </div>
        </h1>

        <div ref={workListRef} className="mt-14 work-list  px-6 lg:px-32">
          {experience.map((item, index) => (
            <div key={index} className="border-b dark:border-b-white/40 py-6">
              <h1 className="font-semibold text-n-2 dark:text-n-1 text-2xl mb-4">{item.companyTitle}</h1>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center text-n-2 dark:text-n-1 text-md font-semibold mb-2 text-[14px]">
                <p className="uppercase  ">{item.position}</p>
                <p>{item.date}</p>
              </div>
              <p className=" dark:text-white/40 font-medium text-lg">{item.workDone}</p>
            </div>
          ))}
        </div>
        {/* add animation */}
        <div className="flex justify-start mt-14 space-x-2  px-6 lg:px-32">
          <Link to="/work"  className="dark:bg-n-1  bg-n-2  text-n-1  dark:text-n-2 px-6 py-6 cursor-pointer relative inline-flex items-center justify-center outline-none font-semibold border-none h-6 rounded-full uppercase hover:text-n-1/90 dark:hover:text-n-2/90  ">View projects</Link>
           
      
          {/* links to a google drive resume  */}
          <a target="_blank" href='https://docs.google.com/document/d/1FYwRYpMB7NrLP9J2I9kBOz7qZ3Eub3L6lzfstaQbhVU/edit?usp=sharing' className=" bg-n-1 dark:bg-n-2 text-n-2 dark:text-n-1 font-semibold border-2 dark:border-n-1/60  outline-none  uppercase hover:text-n-2/80 dark:hover:text-n-btnGrey hover:border-n-btnGrey relative inline-flex items-center justify-center rounded-full  h-6   shadow-md px-6 py-6 transition-colors duration-300 ease-in-out ">
            View resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Experience