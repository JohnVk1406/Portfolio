function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold">Johan Varghese K</h1>

        <div className="flex gap-6 text-sm font-medium">
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
      </div>
    </nav>
  );
}

export default Navbar;
