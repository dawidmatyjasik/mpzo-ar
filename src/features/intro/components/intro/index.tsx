import React from "react";

import Step from "features/intro/components/step/Step";

import type { SlideProps } from "features/intro/types";

interface IntroProps extends SlideProps {
  handleSkip: () => void;
}

const Intro = ({ description, image, title, mp3, handleSkip }: IntroProps) => {
  return <Step title={title} image={image} description={description} mp3={mp3} handleSkip={handleSkip} />;
};

export default Intro;
