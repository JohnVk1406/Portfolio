import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Publications from "./sections/Publications";
import BeyondAcademics from "./sections/BeyondAcademics";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-900">
      <Navbar />

      <main className="pt-24">
        <Hero />
        <Projects />
        <Experience />
        <Publications />
        <BeyondAcademics />
        <Contact />
      </main>
    </div>
  );
}

export default App;
