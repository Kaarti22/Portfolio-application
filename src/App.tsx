import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import CodingProfiles from "./pages/CodingProfiles";
import Connect from "./pages/Connect";
import InterviewExperiences from "./pages/InterviewExperiences";
import Skills from "./pages/Skills";
import VolunteerExperiences from "./pages/VolunteerExperiences";
import Experiences from "./pages/Experiences";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-300 to-purple-200">
      <Router>
        <div className="min-h-screen max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl py-6 mx-auto">
          <Header />
          <div className="my-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/coding-profiles" element={<CodingProfiles />} />
              <Route path="/connect" element={<Connect />} />
              <Route
                path="/interview-experiences"
                element={<InterviewExperiences />}
              />
              <Route path="/skills" element={<Skills />} />
              <Route
                path="/volunteer-experiences"
                element={<VolunteerExperiences />}
              />
              <Route path="/experiences" element={<Experiences />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
};

export default App;
