import React from "react";
import ProjectCard2 from "../../../components/ProjectCard2";

export default function Modu() {
  const Figure1 = require("../../../assets/path/irobot.mp4");

  /* 이건 props로 후에 받아올거임*/
  const items = [
    <video src={Figure1} type="video/ogg" className="vid" controls></video>,
  ];
  const projectInfo = {
    title: "탐사 로봇",
    date: "12/15/2019 (6인 프로젝트)",
    summary:
      "iRobot을 사용하여 장애물을 피하고 주어진 시간 내에 최대한 많은 탐사를 진행하는 프로젝트",

    learned: `
    첫 데모에서는, Vector Field Histogram(VFH)로 인해 wheel이 정상적으로 작동하지 않는 버그가 생겼습니다. 로봇이 작은 공간을 통과하려고 할 시 좌회전을 우선으로 하는 알고리즘과 해당 버그로 인해 한 공간에 갇혀서 계속 공회전하게 되었습니다. 저는 이 VFH 알고리즘의 버그를 로봇의 예상 헤딩 방향을 계산하여 조정하여 버그를 일으키는 논리를 제거하여 한 공간에 갇힐 시 새로운 방향을 찾아서 나아갈 수 있게 하는 부분을 담당하였습니다.
    `,
    github: "https://github.com/Jun0S2/Mobile-Robotics-Final-Project",
    notion:
      "https://befitting-locust-a2c.notion.site/Path-Finding-with-collision-avoidance-9e0b848f50fe482dbd3bd75ec368d6e8",
  };
  return <ProjectCard2 projectInfo={projectInfo} imageInfo={items} />;
}
