import React from "react";
import LargeTypedModule from "../../../components/LargeTypedModule";
import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function EmbeddedProjectText() {
  return (
    <>
      <LargeColorTypedModule
        isMobile={false}
        msg={"임베디드 프로젝트"}
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
