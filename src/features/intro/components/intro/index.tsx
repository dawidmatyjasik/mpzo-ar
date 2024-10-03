import React, { ReactNode } from "react";

import Step from "features/intro/components/step/Step";
import Step1 from "features/intro/components/step1";

import type { SlideName, SlideProps } from "features/intro/types";

const Intro = ({ name, description, image, title }: SlideProps) => {
  const componentsMap: Record<SlideName, ReactNode> = {
    Step1: <Step1 title={title} image={image} description={description} />,
    Step2: <Step title={title} image={image} description={description} />,
    Step3: <Step title={title} image={image} description={description} />,
    Step4: <Step title={title} image={image} description={description} />,
  };

  const Component = componentsMap[name];

  return Component;
};

export default Intro;
