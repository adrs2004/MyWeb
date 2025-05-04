import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full text-[#ffbf00] py-3 text-lg font-cursive border-t border-[#25213b] shadow-lg flex items-center justify-between px-6">
      <p>&copy; Developer Portfolio by Adarsh Kumar Pathak</p>
      <div className="flex gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/adarsh-kumar-pathak/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white transition" />
        </a>
        <a href="https://github.com/adrs2004" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white transition" />
        </a>
        <a href="https://leetcode.com/u/adarsh21122004/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="hover:text-white transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
