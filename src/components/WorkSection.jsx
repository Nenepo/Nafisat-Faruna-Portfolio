import { useEffect, useRef, useState } from 'react';
import { works } from "../work";
import WorkList from "./WorkList";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function WorkSection({ home }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (works.length > 1) {
      swiperRef.current = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        on: {
          slideChange: function () {
            setCurrentIndex(this.activeIndex);
          },
        },
      });
    }
  }, []);

  const handleNext = () => {
    if (swiperRef.current && currentIndex < works.length - 1) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && currentIndex > 0) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="py-20 swiper-container relative">
      {home && (
        <h1 className="text-n-2 text-center dark:text-n-1 text-5xl font-semibold uppercase md:text-6xl tracking-[-4px] leading-tight">
          Work Section
        </h1>
      )}

      {/* Custom Navigation Buttons */}
      {works.length > 1 && (
        <>
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 lg:left-[62px] top-1/2 transform -translate-y-1/2 z-10 bg-[grey]/10 dark:text-white  text-black w-8 h-8 rounded-full"
            >
              <span className='text-lg'> {`<`}</span>
            
            </button>
          )}
          {currentIndex < works.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 lg:right-[62px] top-1/2 transform -translate-y-1/2 z-10 bg-[grey]/10 dark:text-white  text-black w-8 h-8  rounded-full"
            >
              <span className='text-lg'> {`>`}</span>
            </button>
          )}
        </>
      )}

      {/* Swiper Wrapper */}
      <div className="swiper-wrapper">
        {works.map((work, index) => (
          <div className="swiper-slide py-10 px-6 lg:px-32" key={work.id}>
            <WorkList
              index={index}
              title={work.title}
              description={work.description}
              link={work.link}
              techUsed={work.techUsed}
              img={work.img}
              githubRepo={work.githubRepo}
              text={work.text}
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="swiper-pagination"></div>
    </section>
  );
}

export default WorkSection;
