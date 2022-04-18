import React from "react";
import LargeTypedModule from "../../../components/LargeTypedModule";
import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function InterestText() {
  return (
    <>
      <LargeTypedModule
        isMobile={false}
        msg={"저는..."}
        time={2000}
        inLine={true}
        lastWord={true}
      />
      <LargeColorTypedModule
        isMobile={false}
        msg={"반응형"}
        time={2600}
        inLine={true}
        lastWord={true}
      />
      <LargeTypedModule
        isMobile={false}
        msg={"과"}
        time={3100}
        inLine={true}
        lastWord={true}
      />
      <LargeColorTypedModule
        isMobile={false}
        inLine={true}
        msg={"사용자의 마음을 움직이는"}
        time={3250}
        lastWord={true}
      />
      <LargeTypedModule
        isMobile={false}
        msg={"프론트앤드 개발을 목표로 공부하고 있습니다."}
        time={5000}
        inLine={true}
        lastWord={false}
      />
    </>
  );
}
