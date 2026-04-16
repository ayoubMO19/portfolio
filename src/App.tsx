import Header from './components/layout/Header.tsx';
import Hero from './pages/sections/Hero/Hero.tsx';
import AboutMe from './pages/sections/AboutMe/AboutMe.tsx';
import Projects from './pages/sections/Projects/Projects.tsx';
import Experience from './pages/sections/Experience/Experience.tsx';
import Contact from './pages/sections/Contact/Contact.tsx';
import Footer from './components/layout/Footer.tsx';
import './App.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}