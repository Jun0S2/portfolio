import React from "react";
import { Grid } from "@mui/material";
import EmbeddedCarousel from "./components/EmbeddedCarousel";
import EmbeddedProjectText from "./components/text/EmbeddedProjectText";
import "./components/styles/Float.css";
import "./components/styles/Background.css";

export default function Embedded() {
  return (
    <div id="embedded">
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
            className="gradient stack1 stack2"
          >
            {/* Desktop : Text *원래 5*/}
            <Grid container direction="row" alignItems="center">
              <Grid direction="row" sx={{ mt: 10 }}>
                <EmbeddedProjectText />
              </Grid>
            </Grid>

            <Grid container direction="row" sx={{ mt: 0 }}>
              <Grid
                container
                direction="column"
                item
                xs={3}
                sx={{ ml: 30, mr: -10 }}
              ></Grid>
              <EmbeddedCarousel />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
