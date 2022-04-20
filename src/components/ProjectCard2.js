import React from "react";
import "./ProjectCard.css";
/* Stylings */
import { styled } from "@mui/material/styles";
import { Card, Grid, CardActionArea, IconButton } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
/* Icons */
import { ReactComponent as Notion } from "../assets/notion.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import Tooltip from "@mui/material/Tooltip";
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

export default function ProjectCard({ projectInfo, imageInfo }) {
  return (
    <>
      <div className="whiteBox">
        <div className="circle-red" />
        <div className="circle-yellow" />
        <div className="circle-green" />
        <div className="innerBox">
          <Grid container justify="flex-start">
            <Grid item xs={7} sx={{ pr: 0, pt: { xs: 2 }, pl: { xl: "10%" } }}>
              {/* Carousel이 들어갈 자리 */}

              <AliceCarousel controlsStrategy="responsive" items={imageInfo} />
            </Grid>
            <Grid item xs={5}>
              {/* github */}

              <Tooltip title="깃허브에서 더 자세히 보기" placement="top">
                <IconButton
                  aria-label="github"
                  size="large"
                  href={projectInfo.github}
                  target="_blank"
                  style={{ pointerEvents: "auto" }}
                >
                  {projectInfo.github != null ? (
                    <GitHubIcon fontSize="large" style={{ color: "black" }} />
                  ) : (
                    <></>
                  )}
                </IconButton>
              </Tooltip>
              {/* Notion */}
              <Tooltip title="노션에서 더 자세히 보기" placement="top">
                <IconButton
                  aria-label="notion"
                  size="small"
                  href={projectInfo.notion}
                  target="_blank"
                  style={{ pointerEvents: "auto" }}
                >
                  <Notion fontSize="large" />
                </IconButton>
              </Tooltip>
              {/* Team 협업툴 */}
              <Tooltip title="팀 페이지 자세히 보기" placement="top">
                <IconButton
                  aria-label="notion"
                  size="large"
                  href={projectInfo.team}
                  target="_blank"
                  style={{ pointerEvents: "auto" }}
                >
                  <PermContactCalendarRoundedIcon
                    fontSize="large"
                    style={{ color: "black" }}
                  />
                </IconButton>
              </Tooltip>

              {/* 프로젝트 설명이 들어갈 공간 */}
              <StyledCard
                variant="outlined"
                sx={{ pr: 2, size: { xl: "100%", xs: "80%" } }}
              >
                <ProjectTitle
                  sx={{
                    fontSize: { sm: "2rem", xs: "1rem", md: "2rem" },
                  }}
                >
                  {projectInfo.title}
                </ProjectTitle>
                <CardActionArea style={{ pointerEvents: "none" }}>
                  <ProjectDate
                    sx={{
                      fontSize: {
                        sm: "1rem",
                        xs: "0.8em",
                        md: "1rem",
                      },
                    }}
                  >
                    {projectInfo.date}
                  </ProjectDate>
                  <ProjectSub
                    sx={{
                      fontSize: { sm: "1rem", xs: "0.8em", md: "1rem" },
                      mt: 1.5,
                    }}
                  >
                    {projectInfo.summary}
                  </ProjectSub>

                  <ProjectSub
                    sx={{
                      fontSize: { sm: "1rem", xs: "0.8em", md: "1rem" },
                      color: "black",
                      my: 3,
                    }}
                  >
                    배운 점/담당 기능
                  </ProjectSub>
                  <ProjectContents
                    sx={{
                      fontSize: { sm: "1rem", xs: "0.8em", md: "1rem" },
                    }}
                  >
                    {projectInfo.learned}
                  </ProjectContents>
                </CardActionArea>
              </StyledCard>
            </Grid>
          </Grid>
        </div>
        {/* 반씩 나눠서 반쪽에 이미지 넣고 다른 반쪽에 설명 넣기*/}
      </div>
    </>
  );
}
