import React from "react";
import { Grid } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";

export default function LargeTypedModule({
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
        className={isMobile ? "lg-text-mobile mobie-ratio" : "lg-text-desktop"}
      >
        <item>
          <TypeWriterEffect
            startDelay={time}
            hideCursorAfterText={lastWord}
            text={msg}
            typeSpeed={150}
          />
        </item>
      </Grid>
    </>
  );
}
