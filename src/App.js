import { FullPage, Slide } from "react-full-page/lib";
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
      <FullPage>
        {/* navibar */}
        <Navibar />
        <Slide>
          <Intro />
        </Slide>
        <Slide>
          <Interests />
        </Slide>
        {/* 싸피 활동*/}
        <Slide>
          <Activities />
        </Slide>
        {/* 프로젝틑*/}
        <Slide>
          <Projects />
        </Slide>
        {/* contact me*/}
        <Slide>
          <Contact />
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
