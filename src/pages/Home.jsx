import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import Services from '../components/Services';
import Experts from '../components/Experts';
import ChooseUs from '../components/ChooseUs';
import Collaboration from '../components/Collaboration';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import MapSection from '../components/MapSection';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-poppins overflow-x-hidden w-full max-w-full relative">
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <About />
        <VisionMission />
        <Services />
        <Experts />
        <ChooseUs />
        <Collaboration />
        <Packages />
        <Testimonials />
        <Appointment />
        <Contact />
        <MapSection />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
