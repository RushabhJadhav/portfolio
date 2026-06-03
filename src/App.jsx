import Header from "./layout/Header";
import PageBody from "./layout/PageBody";
import Footer from "./layout/Footer";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageBody />} />
        <Route path="/about" element={<About />} />
        {/* Fallback to home for any other route */}
        <Route path="*" element={<PageBody />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
