import HeroTitle from "../../../components/Hero/HeroTitle";
import HeroImage from "../../../components/Hero/HeroImage";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden" id="home">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20 gap-16">
        
        {/* Texto */}
        <HeroTitle />

        {/* Imagen */}
        <HeroImage />
      </div>
    </section>
  );
}