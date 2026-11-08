import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Playground } from "./components/Playground";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Projects />
        <Playground />
        <Stack />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
