import React from "react";

import LargeColorTypedModule from "../../../components/LargeColorTypedModule";
export default function Contact() {
  return (
    <>
      <LargeColorTypedModule
        isMobile={false}
        msg={"Contact Me with..."}
        time={100}
        inLine={true}
        lastWord={true}
      />
    </>
  );
}
