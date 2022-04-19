import React from "react";
import LargeTypedModule from "../../../components/LargeTypedModule";
import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function InterestText() {
  return (
    <>
      <LargeColorTypedModule
        isMobile={false}
        msg={"웹 프로젝트"}
        time={100}
        inLine={true}
        lastWord={false}
      />
      <LargeTypedModule
        isMobile={false}
        msg={" 경험"}
        time={1200}
        inLine={true}
        lastWord={true}
      />
    </>
  );
}
