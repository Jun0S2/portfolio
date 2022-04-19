import React from "react";
import CardContent from "../../components/CardComponent";
import { Grid, Paper, Box } from "@mui/material";

import "../components/styles/Activities.css";

export default function ActivityView() {
  /* 활동 내역 */
  const actList = [
    {
      title: "삼성 청년 SW 아카데미 (SSAFY) 6기",
      contents:
        "삼성과 고용노동부의 SW 역량 향상 교육 및 다양한 프로젝트 기회를 제공",
      date: "2021.07.07~ 현재",
    },

    {
      title: "SSAFY 6기 반장",
      contents: "1학기 대전 3반 반장 & 2학기 공통/자율/특화 반장",
      date: "2021.07.07~ 현재",
    },
    {
      title: "SSAFY Alumni 1기",
      contents: "삼성 청년 SW 아카데미 공식 동문회 활동 (홍보부)",
      date: "2022.03~현재",
    },
    {
      title: "Residence Assistance",
      contents:
        "학생들의 생활 상태를 확인하고 학교 단위의 이벤트를 주최하여 주로 다양성을 주제로 소통",
      date: "2018.01.01 ~ 2020.05.14 ",
    },
  ];
  const pjtList = [
    {
      title: "SSAFY 6기 최종 프로젝트 경진대회 최우수상",
      contents: "공공데이터를 활용한 아파트 정보 공유 플랫폼 제작",
      date: "2021.11.18 - 2021.11.26 (3인 프로젝트)",
    },
    {
      title: "SSAFY 6기 공통 프로젝트 경진대회 우수상",
      contents: "사소한 대결부터 공익 챌린지 SNS 서비스",
      date: "2022.01.10 - 2022.02.18 (6인 프로젝트)",
    },
    {
      title: "SSAFY 6기 특화 프로젝트 지역 발표회 진출",
      contents: "빅데이터 개인화 맞춤 보드게임 추천해주는 서비스 제작",
      date: "2022.02.28 - 2022.04.08 (6인 프로젝트)",
    },
    {
      title: "Lane Department Tutor",
      contents:
        "WVU 공과대학의 CS/CPE/EE 튜터로, 진도를 따라가기 어려움이 있는 학생에게 도움 및 코딩 과제 디버깅 도움 제공",
      date: "2019.09.02 ~ 2020.05.14 ",
    },
  ];

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
            <Grid container direction="row">
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
