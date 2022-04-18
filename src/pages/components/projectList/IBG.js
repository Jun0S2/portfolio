import React from "react";
import ProjectCard from "../../../components/ProjectCard";

export default function IBG() {
  const ibgMobileImg1 = require("../../../assets/ibg/mobile1.png");
  const ibgMobileImg2 = require("../../../assets/ibg/mobile2.png");
  const ibgBGMImg = require("../../../assets/ibg/bgm.jpg");
  const ibgcafeImg = require("../../../assets/ibg/ibgcafe.jpg");
  const ibgInterestsImg = require("../../../assets/ibg/ibginterests.jpg");
  const ibgUploadImg = require("../../../assets/ibg/ibgupload.jpg");
  const ibgSearchImg = require("../../../assets/ibg/ibgsearch.jpg");
  const ibgJoingImg = require("../../../assets/ibg/join.jpg");

  const handleDragStart = (e) => e.preventDefault();
  /* 이건 props로 후에 받아올거임*/
  const items = [
    <img src={ibgBGMImg} onDragStart={handleDragStart} alt="ibg" />,
    <img src={ibgcafeImg} onDragStart={handleDragStart} alt="ibgCafe" />,
    <img
      src={ibgInterestsImg}
      onDragStart={handleDragStart}
      alt="ibgInterests"
    />,
    <img src={ibgUploadImg} onDragStart={handleDragStart} alt="ibgUpload" />,
    <img src={ibgSearchImg} onDragStart={handleDragStart} alt="ibgSearch" />,
    <img src={ibgJoingImg} onDragStart={handleDragStart} alt="ibgJoin" />,
    <img src={ibgMobileImg1} onDragStart={handleDragStart} alt="ibgMobile" />,
    <img src={ibgMobileImg2} onDragStart={handleDragStart} alt="ibgMobile2" />,
  ];
  const projectInfo = {
    title: "이보게",
    date: "2022.02.28 - 2022.04.08 (6인 프로젝트, 지역발표회 진출)",
    summary:
      "나를 위한 보드게임 맞춤 가이드\n주요 기능 : 개인화 추천, 보드게임 거래, 내 주변의 보드게임 카페",
    feature: `보드게임 추천\n
    - 사용자가 자신이 경험해본 게임에 별점을 줄 수 있다.\n
    - 사용자가 여러 게임에 준 별점을 바탕으로 사용자가 좋아할만한 보드게임을 추천받을 수 있다.\n
    - 사용자의 예상 평점을 바탕으로 사용자가 좋아할만한 보드게임을 추천받을 수 있다.\n
    - 사용자가 좋아할 카테고리를 바탕으로 보드게임을 추천받을 수 있다.\n보드게임 상세보기\n- 보드게임에 대한 정보를 확인할 수 있다.
    \n- 다른 사용자들이 남긴 평점과 리뷰를 확인할 수 있다.\n보드게임 거래\n- 사용자의 보드게임을 사진과 함께 올려 다른 사용자들과 거래할 수 있다.\n내 주변 보드게임 카페
    \n- 사용자 주변의 보드게임 카페를 찾아 사용자가 확인할 수 있다.\n내 관심목록\n- 보드게임을 관심목록에 추가해 내가 관심목록에 추가한 보드게임을 한눈에 확인할 수 있다.`,
    learned: `🙆 유저 🔑 관리자  🌙/🔆테마 변경 🗺️ 근처 보드게임 카페 찾기 📅 지라 관리
    🎤 발표 - 시연 ⚠️ 트러블슈팅 및 버그 수정\n
    이보게 프로젝트는 React, Typescript 와 MUI 를 기반으로 제작되었습니다.useEffect와 useState, redux 등 여러 리액트 지식을 직접 구현하며 배워볼 수 있었고 그 외에도 프로젝트를 진행하면서 배운 점들은 노션에 자세히 정리해두었습니다.
    `,
    github: "https://github.com/Jun0S2/IBG",
    team: "https://placid-poppy-8d9.notion.site/28fe0bfa4f284fc18891ddb9be69aacf",
    notion:
      "https://befitting-locust-a2c.notion.site/Progress-7ba1af244ace4cc498b7d6c63397912d",
  };
  return <ProjectCard projectInfo={projectInfo} imageInfo={items} />;
}
