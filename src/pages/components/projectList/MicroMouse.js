import React from "react";
import ProjectCard from "../../../components/ProjectCard";

export default function Modu() {
  const Figure1 = require("../../../assets/micromouse/Figure1.jpg");
  const Figure2 = require("../../../assets/micromouse/Figure2.jpg");
  const modified = require("../../../assets/micromouse/modified.png");

  const handleDragStart = (e) => e.preventDefault();
  /* 이건 props로 후에 받아올거임*/
  const items = [
    <img src={modified} onDragStart={handleDragStart} alt="Improvements" />,
    <img src={Figure1} onDragStart={handleDragStart} alt="Figure1" />,
    <img src={Figure2} onDragStart={handleDragStart} alt="Figure2" />,
  ];
  const projectInfo = {
    title: "MicroController Mouse Maze Solver",
    date: " 04/24/2019 (2인 프로젝트, A)",
    summary:
      "Micromouse는 6x13 미로를 해결하는 소형 로봇 마우스프로젝트로 Freescale IDE를 사용하여 HCS12 시스템에서 임베디드 애플리케이션을 개발했습니다.",
    learned: `PID 제어를 직접 시험해보고 수정할 수 있었습니다.\nDistance 배열, Travel 배열, Heading 방향 배열을 만들어 제작하여 미로를 풀었지만 코드가 복잡하여 수정하기 어렵고 마음에 들지 않았습니다.\n
      삼성청년 SW 아카데미 수료 후 알고리즘을 개선하여 단 하나의 맵 배열과 방향배열을 사용하여 자원을 아끼고 308줄에 달하던 해당 알고리즘을 69줄로 대폭 줄여 재사용과 디버깅시 용이하게 수정했습니다. `,
    github: "https://github.com/Jun0S2/Maze-Solving-Micro-controller-Mouse",
    notion:
      "https://befitting-locust-a2c.notion.site/MicroController-Maze-Solver-7f5dd64edd654d18bca8a10a1e780db5",
  };
  return <ProjectCard projectInfo={projectInfo} imageInfo={items} />;
}
