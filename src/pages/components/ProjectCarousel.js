import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Challympic from "./projectList/Challympic";
import IBG from "./projectList/IBG";
import Modu from "./projectList/Modu";
export default function ProjectCarousel() {
  const projects = [<IBG />, <Challympic />, <Modu />];

  return (
    <>
      <AliceCarousel
        paddingLeft={15}
        paddingRight={250}
        items={projects}
        mouseTracking
        disableButtonsControls
        disableDotsControls
        NextIcon={<img src="http://random.com/next" alt="Next" />}
        PrevIcon={<img src="http://random.com/prev" alt="Prev" />}
        controlsStrategy="responsive"
        responsive={{
          0: { items: 1 },
          400: { items: 1 },
          550: { items: 1 },
          700: { items: 1 },
          900: { items: 1 },
        }}
      ></AliceCarousel>
    </>
  );
}
