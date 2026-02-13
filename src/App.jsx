import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <footer className="bg-white/80 backdrop-blur-md py-6 text-center text-gray-600">
        <p>© 2024 Sagar Varshney. Built with React + Vite + Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
