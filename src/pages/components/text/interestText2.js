import React from "react";
import LargeTypedModule from "../../../components/LargeTypedModule";
import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function InterestText2() {
  return (
    <LargeTypedModule
      isMobile={false}
      msg={" 프론트앤드 개발을 목표로 공부하고 있습니다."}
      time={5000}
      inLine={false}
      lastWord={false}
    />
  );
}
