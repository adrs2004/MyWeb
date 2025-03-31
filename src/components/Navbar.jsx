import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: "about", text: "about()", color: "text-[#50fa7b]" },
    { id: "skills", text: "skills()", color: "text-[#ff79c6]" },
    { id: "education", text: "education()", color: "text-[#f1fa8c]" },
    { id: "certificates", text: "certificate()", color: "text-violet-400" },
    { id: "contact", text: "contact()", color: "text-[#50fa7b]" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[999] border-b border-gray-800 transition-all duration-300 ${
        isScrolled ? "bg-[#0F172A] bg-opacity-95 backdrop-blur-md shadow-lg" : "bg-[#0F172A]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 font-mono text-base lg:text-lg text-[#c9d1d9]">
        {/* Logo */}
        <a href="/" className="text-[#16f2b3] text-2xl lg:text-3xl">
          {"<Adarsh />"}
        </a>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button type="button" className="text-[#16f2b3] focus:outline-none" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {/* Navbar List for Mobile */}
        <ul
          className={`absolute top-16 left-0 w-full bg-[#0F172A] p-4 space-y-4 transition-all duration-300 ease-in-out lg:hidden border-t border-gray-800 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map(({ id, text, color }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`${color} hover:text-[#16f2b3] transition`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Navbar List for Desktop */}
        <ul className="hidden lg:flex lg:space-x-6">
          {navItems.map(({ id, text, color }) => (
            <li key={id}>
              <a href={`#${id}`} className={`${color} hover:text-[#16f2b3] transition`}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
