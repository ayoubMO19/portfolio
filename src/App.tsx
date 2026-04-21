import Header from './components/layout/Header.tsx';
import Hero from './sections/Hero.tsx';
import AboutMe from './sections/AboutMe.tsx';
import Projects from './sections/Projects.tsx';
import Experience from './sections/Experience.tsx';
import Contact from './sections/Contact.tsx';
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