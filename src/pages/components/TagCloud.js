import React from "react";

import { TagCloud } from "react-tagcloud";

export default function SkillStacks() {
  const data = [
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "HTML5", count: 33 },
    { value: "Spring", count: 10 },
    { value: "C++", count: 38 },
    { value: "Java", count: 50 },
    { value: "Jira", count: 60 },
    { value: "Git", count: 50 },
    { value: "Figma", count: 20 },
    { value: "PostMan", count: 30 },
    { value: "Vue.js", count: 60 },
    { value: "Vuetify", count: 60 },
    { value: "MUI", count: 40 },
    { value: "TypeScript", count: 20 },
    { value: "MySQL", count: 20 },
    { value: "MatLab", count: 34 },
    { value: "Arduino", count: 28 },
    { value: "VHDL", count: 10 },
  ];
  return (
    <>
      <TagCloud minSize={24} maxSize={64} tags={data} />
    </>
  );
}
