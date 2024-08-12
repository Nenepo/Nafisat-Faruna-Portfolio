

import Footer from "./Footer";
import Process from "./Process";
import About from "./About";

import Experience from "./Experience";

function Section() {
  return (
    <section className="w-full mt-20 relative">

      <About />
      <Process />
      <Experience />
      {/* reduce the line height */}
      <Footer />
     
    </section>
  );
}

export default Section;
