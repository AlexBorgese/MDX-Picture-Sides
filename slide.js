import React, { useState } from "react";
import styled from "styled-components";

export default ({ imageSrc, answer }) => {
  const [showAnswer, toggle] = useState(false);

  return (
    <Slide>
      <Image src={imageSrc} />
      <Button onClick={() => toggle(!showAnswer)}>
        {showAnswer ? `${answer.month} ${answer.year}` : "Show Answer"}
      </Button>
    </Slide>
  );
};

const Slide = styled.div`
  width: "100vw";
  height: "100vh";
  backgroundcolor: "tomato";
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: cover;
  //   max-width: 500px;
  max-height: 800px;
  width: auto;
  height: auto;
`;

const Button = styled.button`
  font-size: 50px;
`;
