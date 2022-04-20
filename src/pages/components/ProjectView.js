import React from "react";
import CardContent from "../../components/CardComponent";
import {
  Grid,
  Paper,
  Box,
  CardActionArea,
  IconButton,
  Card,
} from "@mui/material";
/* Stylings */
import { styled } from "@mui/material/styles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
/* Icons */
import { ReactComponent as Notion } from "../assets/notion.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import Tooltip from "@mui/material/Tooltip";
import "../components/styles/Activities.css";
// 카드 효과 스타일
const StyledCard = styled(Card)(() => ({
  position: "relative",
  border: "none",
  outline: "none",
}));
// 타이틀
const ProjectTitle = styled("div")(() => ({
  alignItems: "center",
  fontWeight: "bold",
  color: "black",
}));
// 날짜 스타일
const ProjectDate = styled("div")(() => ({
  alignItems: "center",
  whiteSpace: "pre-line",
  color: "#FF6B6B",
}));
// 부가타이틀 스타일
const ProjectSub = styled("div")(() => ({
  alignItems: "center",
  color: "grey",
  whiteSpace: "pre-line",
}));
// 내용 스타일
const ProjectContents = styled("p")(() => ({
  alignItems: "center",
  color: "black",
  whiteSpace: "pre-line",
}));
export default function ActivityView() {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: -15 }}>
        <Paper
          elevation={16}
          sx={{ m: 1, width: "70vw", height: "75vh", borderRadius: "25px" }}
        >
          <Grid container className="activities-whiteBox">
            {/* lights */}
            <Grid className="circle-red" />
            <Grid className="circle-yellow" />
            <Grid className="circle-green" />
          </Grid>

          <Grid container direction="column" rowSpacing={-2}>
            <Grid container direction="column" xs={4}>
              <Grid item xs={6}>
                {actList.map((act) => (
                  <CardContent key={act.title} activity={act} />
                ))}
              </Grid>
              <Grid item xs={6}>
                {pjtList.map((act) => (
                  <CardContent key={act.title} activity={act} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
