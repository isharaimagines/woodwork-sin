import "./App.css";
import { Home } from "./components/home";
import Navbar from "./components/navbar";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Service } from "./components/service";
import { About } from "./components/about";
import { Contactus } from "./components/contactus";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
