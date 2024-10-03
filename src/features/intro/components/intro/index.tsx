import React, { ReactNode } from "react";

import Step1 from "features/intro/components/step1";
import Step2 from "features/intro/components/step2";

import type { SlideName, SlideProps } from "features/intro/types";

const Intro = ({ name }: SlideProps) => {
  const componentsMap: Record<SlideName, ReactNode> = {
    Step1: <Step1 />,
    Step2: <Step2 />,
    Step3: <Step1 />,
    Step4: <Step1 />,
  };

  const Component = componentsMap[name];

  return Component;
};

export default Intro;
