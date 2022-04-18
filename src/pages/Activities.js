import "./components/styles/IntroStyle.css";
import React from "react";
import { Grid } from "@mui/material";
import ActivitiesText from "./components/text/ActivitiesText";
import "./components/styles/Float.css";
import CardContent from "../components/CardComponent";

export default function Activities() {
  /* 활동 내역 */
  const actList = [
    {
      title: "삼성 청년 SW 아카데미 (SSAFY) 6기",
      contents:
        "삼성의 SW 교육 경험과 고용노동부의 취업지원으로 SW 역량\n 향상 교육 및 다양한 취업지원 서비스를 제공하여 취업에 성공하도록 돕는 프로그램",
      date: "2021.07.07~ 현재",
    },
    {
      title: "SSAFY 6기 1학기 최종 프로젝트 경진대회 최우수상",
      contents:
        "아파트에 대한 정보가 필요한 모든 사용자들이 편리하게 정보를 공유할 수 있도록 커뮤니티에\n 초점을 맞춘 아파트 정보 공유 플랫폼 제작",
      date: "2021.11.18 - 2021.11.26 (3인 프로젝트)",
    },
    {
      title: "SSAFY 6기 2학기 공통 프로젝트 경진대회 우수상",
      contents:
        "사소한 대결부터 공익적인 캠페인까지 참여하고, 나의 관심사를 토대로 태그를 \n추천해주는 SNS 서비스 제작",
      date: "2022.01.10 - 2022.02.18 (6인 프로젝트)",
    },
    {
      title: "2학기 특화 프로젝트 지역 발표회 진출",
      contents: "빅데이터 개인화 맞춤 보드게임 추천해주는 서비스 제작",
      date: "2022.02.28 - 2022.04.08 (6인 프로젝트)",
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
        "대학교 residence hall 중 bennett tower 관리자로, 기숙사에 거주하는 학생들의\n 생활 상태를 확인하고 학교 단위의 이벤트를 주최하여 주로 다양성을 주제로 소통",
      date: "2018.01.01 ~ 2020.05.14 ",
    },
    {
      title: "Lane Department Tutor",
      contents:
        "WVU의 공과대학의 CS/CPE/EE 부서의 튜터로, 해당 과목의 진도를 따라가기 어려움이\n 있는 학생을 도와주고 CS 과목 과제의 디버깅을 도와주는 업무를 수행",
      date: "2019.09.02 ~ 2020.05.14 ",
    },
  ];
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
          >
            {/* Desktop : Text */}
            <Grid
              container
              direction="row"
              alignItems="end"
              justifyContent="end"
              sx={{ mt: -5 }}
            >
              <Grid direction="column" sx={{ mr: 10 }}>
                <ActivitiesText />
              </Grid>
            </Grid>
            {/*pink*/}
            <Grid
              className="activities-whiteBox"
              sx={{ ml: { sm: 10 }, mt: { sm: -20 } }}
            >
              {/* lights */}
              <Grid className="circle-red" />
              <Grid className="circle-yellow" />
              <Grid className="circle-green" />
              {/*white*/}
              <Grid
                className="activities-innerBox"
                sx={{ ml: { sm: 8 }, mt: { sm: 3 } }}
              ></Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="row"
                className="activities-table"
                alignContent="center"
              >
                {actList.map((act) => (
                  <CardContent key={act.title} activity={act} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
