import { useEffect, useState } from "react";

const navItems = [
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["publications", "Publications"],
  ["beyond-academics", "Beyond Academics"],
  ["contact", "Contact"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      let current = "";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) current = section.id;
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-semibold transition-opacity duration-300 hover:opacity-60"
        >
          Johan Varghese K
        </a>

        <div className="hidden gap-7 text-sm font-medium md:flex">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative py-1 transition-colors duration-300 after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-px after:origin-left after:bg-black after:transition-transform after:duration-300 hover:text-gray-600 ${
                activeSection === id ? "after:scale-x-100" : "after:scale-x-0"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="text-2xl transition-transform duration-300 hover:rotate-6 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="inline-block transition-transform duration-300">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu-enter mx-auto max-w-6xl px-6 pb-4 border-t border-neutral-200 md:hidden">
          <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-lg">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                className={`transition-all duration-300 hover:translate-x-1 hover:text-gray-600 ${
                  activeSection === id ? "font-semibold text-black" : ""
                }`}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
