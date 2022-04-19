import React from "react";
import LargeTypedModule from "../../../components/LargeTypedModule";
import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function ActivitiesText() {
  return (
    <>
      <LargeTypedModule
        isMobile={false}
        msg={"저의 "}
        time={0}
        inLine={true}
        lastWord={false}
      />
      <LargeColorTypedModule
        isMobile={false}
        msg={"활동"}
        time={600}
        inLine={true}
        lastWord={false}
      />
      <LargeTypedModule
        isMobile={false}
        msg={" 내역입니다."}
        time={1100}
        inLine={true}
        lastWord={true}
      />
    </>
  );
}
