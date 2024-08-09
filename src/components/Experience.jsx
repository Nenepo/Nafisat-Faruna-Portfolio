import Button from './Button';
import { experience } from '..';
import { useEffect, useRef } from 'react';
import { animateRelevantExperience } from '../gsap/Animations';

function Experience() {
  const relevantExperienceRef = useRef(null);
  useEffect(() => {
    const relevantText = document.querySelector('.relevant-text');
    const experienceText = document.querySelector('.experience-text');
    const workList = document.querySelector('.work-list');
    const relevantExperienceText = relevantExperienceRef.current;

    animateRelevantExperience(relevantText, experienceText, workList, relevantExperienceText);
  }, [])


 
  return (
    <div>
      <div id="work" className="mt-28 pb-20">
        <h1 className="text-n-1  text-5xl font-semibold uppercase  md:text-8xl lg:text-[120px] tracking-[-4px] leading-tight  px-6 lg:px-32" style={{ lineHeight: '0.8' }} ref={relevantExperienceRef}>
          <div className="overflow-hidden  h-30 block">
            <span className="tracking-[-4px] block relevant-text">Relevant</span>
          </div>
          <div className="overflow-hidden  h-30  block">
            <span className="tracking-[-4px] block  experience-text">Experience</span>
          </div>
        </h1>

        <div className="mt-14 work-list  px-6 lg:px-32">
          {experience.map((item, index) => (
            <div key={index} className="border-b border-b-white/40 py-6">
              <h1 className="font-semibold text-white text-2xl mb-4">{item.companyTitle}</h1>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center text-white text-md font-semibold mb-2 text-[14px]">
                <p className="uppercase  ">{item.position}</p>
                <p>{item.date}</p>
              </div>
              <p className=" text-white/40 font-medium text-lg">{item.workDone}</p>
            </div>
          ))}
        </div>
        {/* add animation */}
        <div className="flex justify-start mt-14 space-x-2  px-6 lg:px-32">
          <Button text={"View work"} href={"/work"}  className="bg-n-1 shadow-white shadow-sm text-n-2 cursor-pointer outline-none font-semibold border-none rounded-full uppercase  hover:bg-n-btnGrey"/>
           
      
          {/* links to a google drive resume  */}
          <a href='#' className="bg-n-2 text-n-1 font-semibold border-2 border-n-1/60 outline-none  uppercase hover:text-n-btnGrey hover:border-n-btnGrey relative inline-flex items-center justify-center rounded-full  h-6   shadow-md px-6 py-6 transition-colors duration-300 ease-in-out ">
            View resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Experience