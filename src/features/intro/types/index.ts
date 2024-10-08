export type SlideName = "Step1" | "Step2" | "Step3" | "Step4";

export interface SlideTrack {
  id: string;
  url: any;
}

export interface SlideProps {
  name: SlideName;
  title: string;
  description: string;
  image: any;
  mp3: SlideTrack;
}
