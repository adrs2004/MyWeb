import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-white">
      <Navbar />
      <div className="px-[10vh] pt-20">
        <HeroSection />
        <AboutSection />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;