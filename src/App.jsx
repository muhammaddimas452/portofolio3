import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About } from "./components/About";
import Service from "./components/Service";
import { Company } from "./components/Company";
import Technology from "./components/Technology";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Service />
      <Company />
      <Technology />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
