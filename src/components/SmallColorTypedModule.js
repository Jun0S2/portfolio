import React from "react";
import { Grid } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";

export default function LargeColorTypedModule({
  isMobile,
  msg,
  time,
  inLine,
  lastWord,
}) {
  return (
    <>
      <Grid
        item
        xs={12}
        spacing={0}
        sx={{ ml: { xs: 3 } }}
        style={{ float: inLine ? "left" : "none" }}
        className={isMobile ? "sm-text-mobile" : "sm-text-desktop"}
      >
        <item style={{ float: inLine ? "left" : "none" }}>
          <TypeWriterEffect
            startDelay={time}
            hideCursorAfterText={lastWord}
            text={msg}
            typeSpeed={150}
            textStyle={{ color: "#FF6B6B" }}
          />
        </item>
      </Grid>
    </>
  );
}
