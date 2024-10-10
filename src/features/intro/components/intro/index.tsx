import React from "react";

import Step from "features/intro/components/step/Step";

import type { SlideProps } from "features/intro/types";

const Intro = ({ description, image, title, mp3, name }: SlideProps) => {
  return <Step title={title} image={image} description={description} mp3={mp3} name={name} />;
};

export default Intro;
