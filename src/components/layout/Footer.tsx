import { SiGithub, SiX, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ayoub-morghi-ouhda/", icon: <FaLinkedin /> },
    { name: "GitHub", href: "https://github.com/ayoubmo19", icon: <SiGithub /> },
    { name: "X", href: "https://x.com/ayoubmorghi", icon: <SiX /> },
    { name: "Email", href: "mailto:ayoubmorghi@gmail.com", icon: <SiGmail /> },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-between sm:justify-around sm:flex-row p-6 gap-4">
            <p className="text-gray-600 text-sm">© {currentYear} Ayoub Morghi. All rights reserved.</p>
            <div className="flex flex-row items-center text-lg gap-4 text-gray-700 uppercase">
                {SOCIAL_LINKS.map((link) => {
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.name !== "Email" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-green-600 transition-colors p-1"
                            aria-label={`Visitar mi perfil de ${link.name}`}
                        >
                            {link.icon}
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer