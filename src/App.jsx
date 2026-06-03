import Header from "./layout/Header";
import PageBody from "./layout/PageBody";
import Footer from "./layout/Footer";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageBody />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback to home for any other route */}
        <Route path="*" element={<PageBody />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
