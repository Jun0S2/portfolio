import React from "react";
import "./components/styles/IntroStyle.css";
import { Grid } from "@mui/material";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectText from "./components/text/ProjectText";
import "./components/styles/Float.css";

export default function projects() {
  return (
    <div id="fourth">
      <div>
        {window.innerWidth < 600 ? (
          <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ minHeight: "100vh" }}
          >
            <Grid
              item
              row
              container
              spacing={0}
              alignContent="center"
              justifyContent="center"
            >
              준비중입니다
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            direction="row"
            alignItems="center"
            style={{ minHeight: "100vh" }}
          >
            {/* Desktop : Text */}
            <Grid container direction="row" alignItems="center">
              <Grid direction="row" sx={{ mt: 5 }}>
                <ProjectText />
              </Grid>
            </Grid>

            <Grid container direction="row" sx={{ mt: 5 }}>
              <Grid
                container
                direction="column"
                item
                xs={3}
                sx={{ ml: 30, mr: -10 }}
              ></Grid>
              <ProjectCarousel />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
