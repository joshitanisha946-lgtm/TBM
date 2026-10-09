
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import BeforeAfter from "./sections/BeforeAfter";
import Portfolio from "./sections/Portfolio";
import Packages from "./sections/Packages";
import Process from "./sections/Process";
import WhyUs from "./sections/WhyUs";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <BeforeAfter />
        <Portfolio />
        <Packages />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;