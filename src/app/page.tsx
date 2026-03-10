import CustomCursor from "@/components/ui/CustomCursor";
import SequenceScroll from "@/components/scrollytelling/SequenceScroll";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <CustomCursor />
      <SequenceScroll />
      <Projects />
      <About />
      <Services />
      <MarqueeSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
