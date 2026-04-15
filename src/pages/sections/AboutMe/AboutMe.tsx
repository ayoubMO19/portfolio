import TitleDesc from "../../../components/AboutMe/TitleDesc";
import Cards from "../../../components/AboutMe/Cards";

export default function AboutMe() {

    return (
        <section className="relative w-full flex bg-gray-100" id="about">
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row px-6 py-12 md:py-20 gap-12 lg:gap-16">

                {/* Sección de Texto*/}
                <TitleDesc />

                {/* Sección de Cards */}
                <Cards />
            </div>
        </section>
    );
}