import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-900">
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
