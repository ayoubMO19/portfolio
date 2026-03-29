import { SiGithub, SiX, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return(
        <footer className="flex flex-col items-center justify-between sm:justify-around sm:flex-row p-6 gap-4">
            <p>© {currentYear} Ayoub Morghi. All rights reserved.</p>
            <div className="flex flex-row items-center text-lg gap-4 text-gray-700 uppercase">
                <a href="https://www.linkedin.com/in/ayoub-morghi-ouhda/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600"><FaLinkedin /></a>
                <a href="https://github.com/ayoubmo19" target="_blank" rel="noopener noreferrer" className="hover:text-green-600"><SiGithub /></a>
                <a href="https://x.com/ayoubmorghi" target="_blank" rel="noopener noreferrer" className="hover:text-green-600"><SiX /></a>
                <a href="mailto:ayoubmorghi@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600"><SiGmail /></a>
            </div>
        </footer>
    )
}

export default Footer