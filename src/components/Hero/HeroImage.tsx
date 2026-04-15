import profileImage from "../../assets/profile.png";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin} from "react-icons/fa";

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "...", icon: FaLinkedin },
  { name: "GitHub", href: "...", icon: SiGithub },
  { name: "X", href: "...", icon: SiX },
];

export default function HeroImage() {
    return (
        <div className="relative group mt-8 md:mt-0">
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-slate-300 group-hover:border-green-500 transition-all duration-300" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-green-500/50 group-hover:border-green-600 transition-all duration-300" />
          <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={profileImage} 
              alt="Ayoub Morghi" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="bg-white p-3 rounded-full shadow-xl text-slate-800 hover:text-green-600 hover:scale-110 transition-all"
                  aria-label={link.name}
                >
                  <link.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
    );
}