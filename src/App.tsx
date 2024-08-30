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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/coding-profiles" element={<CodingProfiles/>}/>
        <Route path="/connect" element={<Connect/>}/>
        <Route path="/interview-experiences" element={<InterviewExperiences/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/volunteer-experiences" element={<VolunteerExperiences/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
      </Routes>
    </Router>
  );
};

export default App;
