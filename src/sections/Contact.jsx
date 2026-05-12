import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <footer id="contact" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-bold">Contact</h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-neutral-450 transition hover:text-white">
          Interested in software engineering, research, or meaningful technical
          collaborations.
        </p>

        <div className="mt-10 flex flex-wrap items-left justify-left gap-6">
          <a
            href="mailto:johanvarghesek1@gmail.com"
            className="flex items-center gap-2 text-neutral-450 transition hover:-translate-y-0.5 hover:text-white"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/johan-varghese-k-875abb329/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-450 transition hover:-translate-y-0.5 hover:text-white"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/JohnVk1406"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-450 transition hover:-translate-y-0.5 hover:text-white"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="/Johan_Varghese_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-450 transition hover:-translate-y-0.5 hover:text-white"
          >
            <FileText size={18} />
            Resume
          </a>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          © 2026 Johan Varghese K · Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}

export default Contact;
