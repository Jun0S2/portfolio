import "./components/styles/IntroStyle.css";
import React from "react";
import { Grid } from "@mui/material";
import ActivitiesText from "./components/text/ActivitiesText";
import "./components/styles/Activities.css";
import "./components/styles/Background.css";
import ActivityView from "./components/ActivityView";
export default function Activities() {
  return (
    <div id="third">
      <div className="intro-container">
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
            className="stack4 "
          >
            {/* Desktop : Text */}
            <Grid
              container
              direction="column"
              alignItems="end"
              justifyContent="end"
              sx={{ mt: 0 }}
              xs={12}
            >
              <Grid direction="column" sx={{ mr: 10 }}>
                <ActivitiesText />
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              xs={12}
              alignItems="center"
              justifyContent="center"
            >
              <ActivityView />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
