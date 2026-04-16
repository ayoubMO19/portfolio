import HeroTitle from "../../../components/Hero/HeroTitle";
import HeroImage from "../../../components/Hero/HeroImage";
import TechStack from "../../../components/Hero/TechStack";

export default function Hero() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center overflow-hidden" id="home">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-16 pb-12 md:pt-24 md:pb-16 gap-16">
        <HeroTitle />
        <HeroImage />
      </div>
      <div className="w-full">
        <TechStack />
      </div>
    </section>
  );
}