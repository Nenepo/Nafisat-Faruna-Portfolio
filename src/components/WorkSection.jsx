import { useEffect, useRef, useState } from "react";
import { works } from "../work";
import WorkList from "./WorkList";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { ChevronLeft, ChevronRight } from "lucide-react";

function WorkSection({ home }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (works.length > 1) {
      swiperRef.current = new Swiper(".swiper-container", {
        direction: "horizontal",
        slidesPerView: 1,
        breakpoints: {
          1024: {
            slidesPerView: 3, // Display 3 slides on larger screens
          },
        },
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
    <section className="py-20 swiper-container relative mt-[200px]">
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
              className="absolute top-[50%] left-2 lg:left-[62px] flex justify-center items-center z-10 bg-black dark:bg-white  dark:text-black  text-white w-8 h-8 rounded-full"
            >
              <ChevronLeft />
            </button>
          )}
          {currentIndex < works.length - 1   && (
            <button
              onClick={handleNext}
              className="absolute right-2 top-[50%] lg:right-[62px] flex justify-center items-center  z-10 bg-black dark:bg-white  dark:text-black text-white w-8 h-8  rounded-full"
            >
              <ChevronRight />
            </button>
          )}
        </>
      )}

      {/* Swiper Wrapper */}
      <div className="swiper-wrapper ">
        {works.map((work, index) => (
          <div className="swiper-slide py-10 px-6 " key={work.id}>
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
    </section>
  );
}

export default WorkSection;
