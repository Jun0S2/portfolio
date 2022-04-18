import React from "react";
import ProjectCard from "../../../components/ProjectCard";

export default function Challympic() {
  const challympicImg = require("../../../assets/challympic/challympic.png");
  const challympicMobileImg = require("../../../assets/challympic/challympicMobile.png");
  const challympicFeedImg = require("../../../assets/challympic/challympicFeed.png");
  const challympicFeed1Img = require("../../../assets/challympic/challympicFeed1.png");
  const challympicSearchImg = require("../../../assets/challympic/challympicSearch.png");
  const handleDragStart = (e) => e.preventDefault();
  /* 이건 props로 후에 받아올거임*/
  const items = [
    <img src={challympicImg} onDragStart={handleDragStart} alt="Challympic" />,
    <img
      src={challympicMobileImg}
      onDragStart={handleDragStart}
      alt="ChallympicMobile"
    />,
    <img
      src={challympicFeedImg}
      onDragStart={handleDragStart}
      alt="ChallympicFeed"
    />,
    <img
      src={challympicFeed1Img}
      onDragStart={handleDragStart}
      alt="ChallympicFeed2"
    />,
    <img
      src={challympicSearchImg}
      onDragStart={handleDragStart}
      alt="ChallympicSearch"
    />,
  ];
  const projectInfo = {
    title: "챌림픽",
    date: "2022.01.10 - 2022.02.18 (6인 프로젝트, 우수상 수상)",
    summary:
      "모두가 함께하는 도전\n챌림픽은 친구들과 사소한 대결부터 공익적인 캠페인까지 참여하고,\n 나의 관심사를 토대로 태그를 추천해주는 SNS 서비스 입니다.",
    feature: `- 🌙/🔆테마 변경  📱/💻 반응형 웹  🥊 챌린지 등록 및 참여 (사진 및 동영상, 내용 태그 등으로 작성 가능) ❤️ 챌린지 구독 및 포스트/댓글 좋아요 기능 및 좋아요 알림
    🔎 검색 서비스 (태그와 사용자 검색, 자동 완성) 👪 사용자 피드(구독,내가 만든 챌린지, 내가 참여한 챌린지, 좋아요한 포스트 확인 가능) 👤 회원 정보 수정 페이지(닉네임, 비밀번호 변경, 문의, 탈퇴 )\n
    🔑 관리자(회원 정지, 챌린지 관리, 댓글 관리, 문의 답변 및 관리, 신고 및 챌린지 등 현황)`,
    learned: `🌙🔆뷰티파이와 세션 스토리지를 이용한 테마 변경 🔎 게시글 및 유저 자동 검색 기능 구현 👍 추천 및 태그 검색 구현 및 태그 검색 결과 페이지 🔑 회원 및 관리자 관련 페이지 📱 모바일 최적화 \n
    챌림픽은 Vue.js 와 Javascript을 기반으로 진행된 프로젝트입니다. 이번 프로젝트의 가장 큰  Takeaway는 "반응형"입니다. 처음에는 익숙하지 않아서 따로 페이지를 만들었지만 디자인이 비슷해도 된다면 사이즈에 따라 조절 수 있었습니다.\n가장 기억에 남는 이슈는 HTML5의 비디오 플레이어가 정상적으로 작동하지 않아 여러번 수정을  시도했지만, Video.js의 속성에 props을 주어 사용하여 해결했던 이슈입니다.`,
    github: "https://github.com/Jun0S2/Challympic",
    team: "https://ssafy6commonpjt.notion.site/_-6-b449c8f84a6843a282e8a9158fa207f0",
    notion:
      "https://befitting-locust-a2c.notion.site/SSAFY-6-2-54252c73f95640c893a3f881d0cf9bfb",
  };
  return <ProjectCard projectInfo={projectInfo} imageInfo={items} />;
}
