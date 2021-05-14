import React from "react";
import Typewriter from "typewriter-effect";
import data from "../../Yourdata";

function Type() {
  return (
    <Typewriter
      options={{
        strings: data.passion,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
