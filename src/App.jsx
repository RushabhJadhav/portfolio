import Header from "./layout/Header";
import PageBody from "./layout/PageBody";
import Footer from "./layout/Footer";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageBody />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
