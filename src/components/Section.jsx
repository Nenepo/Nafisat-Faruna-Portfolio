

import Footer from "./Footer";
import Process from "./Process";
import About from "./About";

import Experience from "./Experience";
import WorkSection from "./WorkSection";

function Section() {
  return (
    <section className="w-full mt-20 relative lg:px-10 md:px-5">

      <About />
      <WorkSection home/>
      <Process />
      <Experience />
      {/* reduce the line height */}
      <Footer />
     
    </section>
  );
}

export default Section;
