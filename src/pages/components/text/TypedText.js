import React from "react";
import { Grid } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";

export default function TypedText({ isMobile }) {
  return (
    <>
      <Grid
        item
        xs={12}
        spacing={0}
        sx={{ ml: { xs: 3 } }}
        className={isMobile ? "lg-text-mobile mobie-ratio" : "lg-text-desktop"}
      >
        <item>
          <TypeWriterEffect
            startDelay={100}
            textStyle={{ color: "#FFf" }}
            hideCursorAfterText={true}
            cursorColor="#fff"
            text="안녕하세요."
            typeSpeed={150}
          />
        </item>

        <item style={{ float: "left" }}>
          <TypeWriterEffect
            startDelay={1200}
            text="기록"
            hideCursorAfterText={true}
            cursorColor="#FF6B6B"
            typeSpeed={150}
            textStyle={{ color: "#FF6B6B" }}
          />
        </item>
        <item style={{ float: "none" }}>
          <TypeWriterEffect
            textStyle={{ color: "#FFf" }}
            cursorColor="#fff"
            startDelay={1600}
            text="하는 개발자"
            hideCursorAfterText={true}
            typeSpeed={150}
          />
        </item>

        <item>
          <TypeWriterEffect
            startDelay={2800}
            cursorColor="#fff"
            textStyle={{ color: "#FFf" }}
            text="박혜준입니다."
            typeSpeed={150}
            hideCursorAfterText={true}
          />
        </item>
        <item
          item
          spacing={0}
          xs={12}
          className={isMobile ? "sm-text-mobile" : "sm-text-desktop"}
        >
          <TypeWriterEffect
            startDelay={4000}
            cursorColor="#fff"
            textStyle={{ color: "#FFf" }}
            text="#도전적 #열정적 #호기심"
            typeSpeed={150}
          ></TypeWriterEffect>
        </item>
      </Grid>
    </>
  );
}
