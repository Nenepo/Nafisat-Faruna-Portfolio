
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import TextAnimation from "./TextAnimation";
import gsap from "gsap";


function Header() {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(prev => !prev);
    // Slide animations for mobile navigation

    gsap.to('#leftDiv', { x: openNavigation ? 0 : '50%', duration: 0.5, ease: 'power2.inOut' });
    gsap.to('#rightDiv', { x: openNavigation ? 0 : '-70%', duration: 0.5, ease: 'power2.inOut' });

    gsap.to("#text", {
      y: openNavigation ? 0 : '20%', duration: 1, ease: 'power2.inOut', delay: 1
    })

    gsap.fromTo("#navigation", { y: '-100%' }, {
      y: openNavigation ? '-1%' : '1%', duration: 0.8, ease: 'power2.inOut'
    })
  };




  return (
    <header className="fixed  w-full z-20 py-6 backdrop-blur-md lg:px-10">
      <div className="md:px-5 md:items-center md:flex md:justify-between">
        {/* transition x open navigation = true */}
        <div id="mobile-nav" className="flex justify-between items-center px-5">
          <a id="leftDiv" href="#hero" className="md:translate-x-[-10%] md:mt[-4%]" >
            <h3 className="text-lg font-[500] uppercase text-n-1">Nafisat Faruna</h3>
          </a>
          <div id="rightDiv" className="cursor-pointer  z-20 md:hidden" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </div>
        </div>

        {/* text transition */}
        <div id="navigation" className={`${openNavigation ? 'flex' : 'hidden'} flex-col h-[100vh] items-center bg-n-2 w-full  pt-20 space-y-10 md:pt-0 md:flex-row md:translate-y-0 md:h-10 md:bg-inherit md:flex md:justify-between md:space-y-0 md:w-[80%]`}>
          <TextAnimation openNavigation={openNavigation} />
          <nav id="intro" className=" mx-auto md:mx-0 md:flex md:gap-4  ">
            {navigation.map((item, index) => (
              <div className="parent overflow-hidden" key={index}>
                <Link
                 
                  key={item.id}
                 to={item.url}
                  onClick={() => setOpenNavigation(false)

                  }
                  className={`line relative uppercase block text-[3rem] font-[500] md:text-lg font-poppins text-n-1 transition-all tracking-tighter border-opacity-0 
               border-n-1 border-b-4 hover:border-opacity-100  ${item.url === pathname.hash ? "" : ""}  `}
                >
                  {item.title}
                </Link>
              </div>

            ))}
          </nav>

          {/* transitions up */}
          <div id="text" className="space-y-4 text-center md:items-center md:space-y-0 md:flex md:space-x-4">
            <div className="bg-n-1/30 w-[100%] h-[1px] mx-auto md:hidden "></div>
            <p className="uppercase text-n-1 font-[500] ">Let's Connect</p>
            {/* add an icon */}
            <Button href="mailto:nafisafaruna@gmail.com" text="nafisafaruna@gmail.com" className={`text-sm transition-colors hover:bg-n-1/60 font-[500]`}></Button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
