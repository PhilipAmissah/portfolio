import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import ScrollTop from "../../components/ScrollTop";
import MDXRenderer from "../../components/MDXRenderer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />

      {/* MDX content */}
      <div className="p-6">
        <MDXRenderer
          source={`
# Hello World 🌍

Email directly to <a href="mailto:philipamissah@outlook.com">philipamissah@outlook.com</a> for consultation & collaboration.
`}
        />
      </div>
    </>
  );
}
