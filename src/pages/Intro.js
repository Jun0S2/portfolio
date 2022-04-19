import "./components/styles/IntroStyle.css";
import TypedText from "./components/text/TypedText";
import React from "react";
import "../components/Effects.css";
import "./components/styles/Float.css";
import { Grid, Paper } from "@mui/material";
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
              <Paper elevation={16}>
                <img
                  class="intro-aboutMe-mobile"
                  src={AboutMeImg}
                  alt="AboutMe"
                />
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="row" alignItems="center">
            {/* Desktop */}
            <Grid
              container
              xs={6}
              sm={5}
              direction="column"
              sx={{ px: { sm: 8, xs: 4 } }}
              className="diagonal-hero-bg fadein"
              justifyContent="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item>
                <TypedText isMobile={false} />
              </Grid>
            </Grid>
            <Grid
              container
              xs={6}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <img
                className="intro-aboutMe-desktop infinite-floating fadein"
                style={{
                  maxWidth: "50vw",
                }}
                src={AboutMeImg}
                alt="AboutMe"
              />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
