import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function WorkList({ className, title, description, link, techUsed = [], img, githubRepo, text, index }) {
  const workRefs = useRef([]);

  useEffect(() => {
    // GSAP stagger animation for each work item
    gsap.fromTo(
      workRefs.current,
      { y: '100%', opacity: 0 },
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
    <div
      ref={(el) => (workRefs.current[index] = el)}
      className={`${className} p-6 w-full h-[750px]   bg-gray-100 dark:bg-[grey]/10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 `}
    >
      <div className="relative overflow-hidden rounded-md max-h-[200px] lg:max-h-[150px] " >
        <img src={img} alt={title} className="w-full h-full object-cover lg:object-contain" />
      </div>
      <div className="mt-4 ">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
        <p className=" text-xs text-gray-600 dark:text-gray-500">{description}</p>
        <p className="text-gray-800 text-sm  mt-2 justify-center dark:text-gray-300">{text}</p>

        <div className="flex mt-4 space-x-4">
         {link && <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:text-blue-600 transition"
          >
            Visit Project
          </a>}
          {githubRepo && <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-600 transition"
          >
            GitHub Repo
          </a>}
        </div>

        <div className="flex flex-wrap  mt-4 gap-4">
          {techUsed.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 dark:bg-[grey]/30 text-gray-500 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkList;
 