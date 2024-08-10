

import Footer from "./Footer";
import Process from "./Process";
import About from "./About";

import Experience from "./Experience";

function Section() {
  return (
    <section className="w-full mt-20 relative  py-10   lg:py-20">

      <About />
      <Process />
      <Experience />
      {/* reduce the line height */}
      <Footer />
      <div className="mt-5">
        <p className="text-n-textGrey  pl-4"> olio portfolio template (midnight) – 2024© </p>
        </div>
    </section>
  );
}

export default Section;
