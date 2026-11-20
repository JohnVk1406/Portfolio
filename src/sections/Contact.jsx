import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "../components/Reveal";

function Contact() {
  return (
    <footer id="contact" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-4xl font-bold">Contact</h2>

          <p className="mt-6 max-w-2xl leading-relaxed text-neutral-300">
            Interested in software engineering, research, or meaningful technical
            collaborations.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-start gap-6">
          <Reveal delay={90}>
            <a
              href="mailto:johanvarghesek1@gmail.com"
              className="flex items-center gap-2 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <Mail size={18} />
              Email
            </a>
          </Reveal>

          <Reveal delay={150}>
            <a
              href="https://www.linkedin.com/in/johan-varghese-k-875abb329/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </Reveal>

          <Reveal delay={210}>
            <a
              href="https://github.com/JohnVk1406"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </Reveal>

          <Reveal delay={270}>
            <a
              href="/Johan_Varghese_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FileText size={18} />
              Resume
            </a>
          </Reveal>
        </div>

        <Reveal delay={330}>
          <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
            © 2026 Johan Varghese K · Built with React & Tailwind CSS
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default Contact;
