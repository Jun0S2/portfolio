import "./components/styles/InterestStyle.css";
import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import InterestText from "./components/text/InterestText";
import InterestText2 from "./components/text/interestText2";
import SkillStacks from "./components/TagCloud";
import "./components/styles/Float.css";

export default function Interests() {
  const MobileImg = require("../assets/mobile.jpg");
  const DesktopImg = require("../assets/desktop.jpg");
  return (
    <div id="second">
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
            className="background container"
          >
            {/* Desktop : Text */}
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <InterestText />
              </Grid>
              <Grid item>
                <InterestText2 />
              </Grid>
            </Grid>
            <Grid container direction="row" sx={{ mt: 0 }}>
              <Grid
                container
                direction="column"
                item
                xs={3}
                sx={{ ml: 30, mr: -30 }}
              >
                <Box>
                  <img
                    className="intro-aboutMe-desktop fadein "
                    style={{ maxWidth: "40vw" }}
                    src={DesktopImg}
                    alt="DesktopImg"
                  />
                </Box>
                <Typography>
                  대부분의 프로젝트를 반응형으로 제작하여 모바일과 테블릿
                  환경에서도 최적화된 상태로 사용 가능합니다.
                </Typography>
              </Grid>
              <Grid container direction="column" item xs={3}>
                <Box>
                  <img
                    className="intro-aboutMe-desktop floating fadein"
                    style={{
                      maxWidth: "12vw",
                      position: "absolute",
                      left: "100px",
                    }}
                    src={MobileImg}
                    alt="MobileImg"
                  />
                </Box>
              </Grid>

              <Grid
                container
                direction="column"
                alignItems="center"
                item
                xs={5}
                sx={{ pl: 10, pt: 5 }}
              >
                <SkillStacks />
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
