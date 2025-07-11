import { About } from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Technologies from "./components/Technologies.jsx";
import  Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Experience/>
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
