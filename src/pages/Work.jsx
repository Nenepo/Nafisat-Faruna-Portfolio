import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Footer from '../components/Footer';
import WorkList from '../components/WorkList';

function Work() {
  const selectedRef = useRef(null);
  const worksRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the "SELECTED" and "WORKS" text
    gsap.fromTo(
      selectedRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power2.out', delay: 0.3 }
    );

    gsap.fromTo(
      worksRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  return (
    <section className="w-full pt-20  lg:py-20">
      <div className='py-20'>
        <p className=' text-center text-n-2 dark:text-n-1'>(2023 - 2024)</p>

        <h1 className="overflow-y-hidden mt-2 -space-y-1.5 text-5xl font-semibold uppercase z-20 md:text-7xl lg:text-[120px] text-n-2 dark:text-n-1">
          <div className="overflow-y-hidden w-full text-center h-30 block">
            <span ref={selectedRef} className="tracking-[-3px] block">
              SELECTED
            </span>
          </div>
          <div className="overflow-y-hidden w-full text-center block">
            <span ref={worksRef} className="tracking-[-3px] block">
              WORKS
            </span>
          </div>
        </h1>

        {/* each work will be linked */}
        <div>
          <WorkList />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Work;
