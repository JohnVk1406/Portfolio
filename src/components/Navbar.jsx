import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold">
          Johan Varghese K
        </a>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-gray-600">
            Projects
          </a>

          <a href="#experience" className="hover:text-gray-600">
            Experience
          </a>

          <a href="#publications" className="hover:text-gray-600">
            Publications
          </a>
          <a href="#beyond-academics" className="hover:text-gray-600">
            Beyond Academics
          </a>

          <a href="#contact" className="hover:text-gray-600">
            Contact
          </a>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="mx-auto max-w-6xl px-6 pb-4 border-t border-neutral-200 md:hidden">
          <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-lg">
            <a
              className="hover:text-gray-600"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              className="hover:text-gray-600"
              href="#experience"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a
              className="hover:text-gray-600"
              href="#publications"
              onClick={() => setIsOpen(false)}
            >
              Publications
            </a>
            <a
              className="hover:text-gray-600"
              href="#beyond-academics"
              onClick={() => setIsOpen(false)}
            >
              Beyond Academics
            </a>
            <a
              className="hover:text-gray-600"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
