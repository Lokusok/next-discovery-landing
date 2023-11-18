export type PlaceType = {
  title: string;
  url?: {
    origin: string;
    text: string;
  };
  description: string[];
  imageUrl: string;
};

export type PreviewType = {
  title: string;
  subtitle: string;
  duration?: string;
  imageUrl: string;
};

export type SourceType = {
  videoSource: string;
};
