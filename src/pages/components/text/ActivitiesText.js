import React from "react";
import LargeTypedModule from "../../../components/LargeTypedModule";
import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function ActivitiesText() {
  return (
    <>
      <LargeTypedModule
        isMobile={false}
        msg={"저는 모든 일에 항상 "}
        time={0}
        inLine={true}
        lastWord={false}
      />
      <LargeColorTypedModule
        isMobile={false}
        msg={"적극적으로"}
        time={600}
        inLine={true}
        lastWord={false}
      />
      <LargeTypedModule
        isMobile={false}
        msg={" 활동하고 있습니다."}
        time={1600}
        inLine={true}
        lastWord={true}
      />
    </>
  );
}
