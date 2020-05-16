import React, { useState } from "react";

export default ({ imageSrc, answer }) => {
  const [showAnswer, toggle] = useState(false);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "tomato"
      }}
    >
      <img src={imageSrc} />
      <button onClick={() => toggle(!showAnswer)}>answer</button>
      {showAnswer && answer}
    </div>
  );
};
