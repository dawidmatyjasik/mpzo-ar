import mp3 from "assets/mp3/sample.mp3";
import Image1 from "assets/png/step1-image.png";

import type { SlideProps } from "features/intro/types";

export const slides: SlideProps[] = [
  {
    name: "Step1",
    title: "intro.step1.title",
    description: "intro.step1.description",
    image: Image1,
    mp3: {
      id: "step1",
      url: mp3,
    },
  },
  {
    name: "Step2",
    title: "intro.step2.title",
    description: "intro.step2.description",
    image: Image1,
    mp3: {
      id: "step2",
      url: mp3,
    },
  },
  {
    name: "Step3",
    title: "intro.step3.title",
    description: "intro.step3.description",
    image: Image1,
    mp3: {
      id: "step3",
      url: mp3,
    },
  },
  {
    name: "Step4",
    title: "intro.step4.title",
    description: "intro.step4.description",
    image: Image1,
    mp3: {
      id: "step4",
      url: mp3,
    },
  },
];
