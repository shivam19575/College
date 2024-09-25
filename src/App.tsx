import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Gallery from "./components/Pages/Gallery";
import Courses from "./components/Pages/Courses";
import Contact from "./components/Pages/Contact";
import SubNavbar from "./components/SubNavbar";
import Footer from "./components/Footer";

const App = () => {
  return (
   <BrowserRouter >
   <Navbar />
   <SubNavbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/courses" element={<Courses />} />
    <Route path="contact" element={<Contact />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
};

export default App;
