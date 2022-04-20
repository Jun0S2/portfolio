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
        msg={"재사용 가능"}
        time={600}
        inLine={true}
        lastWord={false}
      />
      <LargeTypedModule
        isMobile={false}
        msg={"하고"}
        time={1100}
        inLine={true}
        lastWord={false}
      />
      <LargeColorTypedModule
        isMobile={false}
        inLine={true}
        msg={"여러 환경에서 사용 가능한 "}
        time={1250}
        lastWord={false}
      />
    </>
  );
}
