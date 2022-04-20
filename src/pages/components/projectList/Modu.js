import React from "react";
import ProjectCard from "../../../components/ProjectCard";

export default function Modu() {
  const moduMainImg = require("../../../assets/modu/modumain.png");
  const moduBoardImg = require("../../../assets/modu/moduBoard.png");
  const moduCalendarImg = require("../../../assets/modu/moduCalendar.png");
  const moduAdminImg = require("../../../assets/modu/moduAdmin.png");
  const moduDarkImg = require("../../../assets/modu/moduDark.png");
  const moduDarkAdminImg = require("../../../assets/modu/moduAdminDark.png");
  const moduMapImg = require("../../../assets/modu/moduMap.png");

  const handleDragStart = (e) => e.preventDefault();
  /* 이건 props로 후에 받아올거임*/
  const items = [
    <img src={moduMainImg} onDragStart={handleDragStart} alt="moduMain" />,
    <img src={moduBoardImg} onDragStart={handleDragStart} alt="moduBoard" />,
    <img src={moduMapImg} onDragStart={handleDragStart} alt="moduMap" />,
    <img src={moduCalendarImg} onDragStart={handleDragStart} alt="moduCal" />,
    <img src={moduAdminImg} onDragStart={handleDragStart} alt="moduAdmin" />,
    <img src={moduDarkImg} onDragStart={handleDragStart} alt="moduDark" />,
    <img
      src={moduDarkAdminImg}
      onDragStart={handleDragStart}
      alt="moduAdminDark"
    />,
  ];
  const projectInfo = {
    title: "모두의 집",
    date: "2021.11.18 - 2021.11.26 (3인 프로젝트, 최종 프로젝트 최우수상)",
    summary:
      "모두의 집은 아파트에 대한 정보가 필요한 모든 사용자들이 편리하게 정보를 공유할 수 있도록 커뮤니티에 초점을 맞춘 아파트 정보 공유 플랫폼입니다.\n주요 기능 : 테마변경, 문의사항, 관리자페이지,아파트 이름/지역으로 매물 정보 찾기, 게시판 기능",
    learned: `🙆 유저 🔑 관리자  🌙/🔆테마 변경 🍞Toast UI Open Source 적용 ✔️모듈화 (게시글 리스트/작성)\n
      모두의 집 프로젝트는 공공데이터, Vue.js 와 JavaScript 를 기반으로 제작되었습니다. Vuetify를 사용했으며 오픈 소스(Toast UI Editor)를 활용했습니다. 가장 기억에 남는 부분은 팀원이 사용한 각각의 v-simple-table을 활용성이 더 높은 v-data-table로 변경하고 하나의 모듈로 변경한 부분이었습니다. 또한, 유저부분의 백앤드 진행했습니다.
      `,
    team: "https://trello.com/b/xNIhLyQC",
    notion:
      "https://befitting-locust-a2c.notion.site/05d0541a0d9f43b9b805a854f96a6ac5",
  };
  return <ProjectCard projectInfo={projectInfo} imageInfo={items} />;
}
