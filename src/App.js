import Navibar from "./components/Navibar";
import Intro from "./pages/Intro";
import Interests from "./pages/Interests";
import Activities from "./pages/Activities";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";
function App() {
  return (
    <div className="App">
      {/* navibar */}
      <Navibar />
      <Intro />
      <Interests />
      {/* 싸피 활동*/}
      <Activities />
      {/* 프로젝틑*/}
      <Projects />
      {/* contact me*/}
      <Contact />
  
    </div>
  );
}

export default App;
