import React from "react";
import LargeTypedModule from "../../../components/LargeTypedModule";
import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function ActivitiesText() {
  return (
    <>
      <LargeTypedModule
        isMobile={false}
        msg={"저의 "}
        time={2000}
        inLine={true}
        lastWord={true}
      />
      <LargeColorTypedModule
        isMobile={false}
        msg={"활동"}
        time={2600}
        inLine={true}
        lastWord={true}
      />
      <LargeTypedModule
        isMobile={false}
        msg={" 내역입니다."}
        time={3100}
        inLine={true}
        lastWord={false}
      />
    </>
  );
}
