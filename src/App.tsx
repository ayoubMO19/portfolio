import Header from './components/layout/Header.tsx';
import Hero from './pages/sections/Hero/Hero.tsx';
import AboutMe from './pages/sections/AboutMe/AboutMe.tsx';
import Projects from './pages/sections/Projects/Projects.tsx';
import Footer from './components/layout/Footer.tsx';
import './App.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100">
        <Hero />
        <AboutMe />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}