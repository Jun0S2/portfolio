import "./components/styles/IntroStyle.css";
import TypedText from "./components/text/TypedText";
import React from "react";
import "./components/styles/Float.css";
import { Grid } from "@mui/material";
/*@author June Park
  - full Page
  - About Me
  - Typing Effects
*/
export default function Intro() {
  const AboutMeImg = require("../assets/aboutMe.png");

  return (
    <div id="first">
      <div className="intro-container">
        {window.innerWidth < 600 ? (
          <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ minHeight: "100vh" }}
          >
            <Grid item row container spacing={0} sx={{ mt: 10 }}>
              <TypedText isMobile={true} />
              <img
                class="intro-aboutMe-mobile"
                src={AboutMeImg}
                alt="AboutMe"
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="row" alignItems="center">
            {/* Desktop */}
            <Grid container item xs={5} direction="column" sx={{ px: 8 }}>
              <TypedText isMobile={false} />
            </Grid>
            <Grid
              container
              item
              xs={6}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "100vh" }}
            >
              <img
                className="intro-aboutMe-desktop floating"
                style={{ maxWidth: "50vw" }}
                src={AboutMeImg}
                alt="AboutMe"
              />
            </Grid>
            <Grid xs={1}></Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
