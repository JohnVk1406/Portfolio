function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center">
      <div className="mx-auto max-w-6xl px-6">
        <p className="hero-enter hero-enter-delay-1 mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">
          B.Tech CSE Student • College of Engineering Trivandrum
        </p>

        <h1 className="hero-enter hero-enter-delay-2 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          Aspiring Computer Scientist focused on Generative AI, Systems, and
          Scalable Software.
        </h1>

        <p className="hero-enter hero-enter-delay-3 mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          I am a Computer Science undergraduate at the College of Engineering
          Trivandrum, exploring artificial intelligence, systems, and
          research-driven problem solving while building real-world software
          projects.
        </p>

        <div className="hero-enter hero-enter-delay-3 mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-gray-300 px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
          >
            Contact
          </a>
          <a
            href="/Johan_Varghese_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-300 px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
