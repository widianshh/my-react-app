import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galery from "./pages/Galery";
import Jobs from "./pages/Jobs";
import JobsDetail from "./pages/JobsDetail";
import JobsByCategory from "./pages/JobsByCategory";
import GalleryDetail from "./pages/GaleryDetail";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <div className="items-center justify-center w-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Galery />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobsDetail />} />
            <Route
              path="/jobs/category/:category"
              element={<JobsByCategory />}
            />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
