import React from "react";
import ProjectCard2 from "../../../components/ProjectCard2";

export default function Modu() {
  const Figure1 = require("../../../assets/bb8/bb8.mp4");
  const Figure2 = require("../../../assets/bb8/BB8App.png");
  const Figure3 = require("../../../assets/bb8/BB8Img.png");

  /* 이건 props로 후에 받아올거임*/
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={Figure3} onDragStart={handleDragStart} alt="Figure3" />,
    <video src={Figure1} type="video/ogg" className="vid" controls></video>,
    <img src={Figure2} onDragStart={handleDragStart} alt="Figure2" />,
  ];
  const projectInfo = {
    title: "Ball Buddy",
    date: " Spring 2018 - Fall 2019 (5인 프로젝트)",
    summary:
      "Ball Buddy는 스타워즈의 BB8에서 착안한 로봇으로, 무료함을 느끼는 독거노인의 친구이자 가족입니다\n3D모델링부터 움직임까지 전부 처음부터 끝까지 제작한 프로젝트입니다",

    learned: `
    주요 기능 : 📱안드로이드 앱으로 작동 📶블루투스 연결 💃🏻간단한 댄스 📷빌트인 카메라로 움직임이 힘든 노인분들이 앉은자리에서 바로 바깥이나 주방의 상황 파악 가능
    \n담당 업무 : 
     1. Autodesk Fusion 360을 사용한 몸체 부분 디자인
     2. 블루투스 연결 및 MIT App Inventor로 연결
     3. 간단한 회로 연결
     4. 로봇 전진 기능
    `,
    github: "https://github.com/Jun0S2/WVU-Capstone",
    notion:
      "https://befitting-locust-a2c.notion.site/BB-8-14a5c931b49848a8a767c612f0bbaf39",
  };
  return <ProjectCard2 projectInfo={projectInfo} imageInfo={items} />;
}
