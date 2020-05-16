import React, { useState } from "react";
import styled from "styled-components";

import posed, { PoseGroup } from "react-pose";

export default ({ imageSrc, answer }) => {
  const [showAnswer, toggle] = useState(false);
  const [isLoading, toggleloading] = useState(true);

  return (
    <PoseGroup>
      <Slide key={answer.month}>
        {isLoading && <Loading>Loading</Loading>}
        <Image
          src={imageSrc}
          loading="lazy"
          alt={answer.month}
          onLoad={() => toggleloading(!isLoading)}
        />
        <Button onClick={() => toggle(!showAnswer)}>
          {showAnswer ? `${answer.month} ${answer.year}` : "Show Answer"}
        </Button>
      </Slide>
    </PoseGroup>
  );
};

const PosedSlide = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const PosedText = posed.div({
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const Slide = styled(PosedSlide)`
  width: "100vw";
  height: "100vh";
  background-color: #222222;
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

const Loading = styled(PosedText)`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 800px;
`;
