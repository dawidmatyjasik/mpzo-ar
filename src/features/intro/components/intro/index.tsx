import React, { ReactNode } from "react";

import Step from "features/intro/components/step/Step";

import type { SlideName, SlideProps } from "features/intro/types";

const Intro = ({ name, description, image, title, mp3 }: SlideProps) => {
  const componentsMap: Record<SlideName, ReactNode> = {
    Step1: <Step title={title} image={image} description={description} mp3={mp3} />,
    Step2: <Step title={title} image={image} description={description} mp3={mp3} />,
    Step3: <Step title={title} image={image} description={description} mp3={mp3} />,
    Step4: <Step title={title} image={image} description={description} mp3={mp3} />,
  };

  const Component = componentsMap[name];

  return Component;
};

export default Intro;
