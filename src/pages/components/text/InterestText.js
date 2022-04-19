import React from "react";
import LargeTypedModule from "../../../components/LargeTypedModule";
import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function InterestText() {
  return (
    <>
      <LargeTypedModule
        isMobile={false}
        msg={"저는..."}
        time={0}
        inLine={true}
        lastWord={false}
      />
      <LargeColorTypedModule
        isMobile={false}
        msg={"반응형"}
        time={600}
        inLine={true}
        lastWord={false}
      />
      <LargeTypedModule
        isMobile={false}
        msg={"과"}
        time={1100}
        inLine={true}
        lastWord={false}
      />
      <LargeColorTypedModule
        isMobile={false}
        inLine={true}
        msg={"사용자의 마음을 움직이는"}
        time={1250}
        lastWord={false}
      />
    </>
  );
}
