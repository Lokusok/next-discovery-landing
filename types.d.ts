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

export type VideoType = PreviewType & SourceType;

export type RecommendPlaceType = {
  imageUrl: string;
  title: string;
  description?: string;
};

export type PhotographerType = {
  imageUrl: string;
  quote: string;
  name: string;
};

export type BlazonryType = {
  imageUrl: string;
  title: string;
};

export type LanguagesType = 'ru' | 'en';
