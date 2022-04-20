import { FullPage, Slide } from "react-full-page/lib";
import Navibar from "./components/Navibar";
import Intro from "./pages/Intro";
import Interests from "./pages/Interests";
import Activities from "./pages/Activities";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Embedded from "./pages/Embedded";
import "./App.css";
function App() {
  window.ondragstart = function () {
    return false;
  };
  return (
    <div className="App noselect">
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
        <Slide>
          <Embedded />
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
