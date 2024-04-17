import { ProjectType } from './enums';

export type Project = {
  id: number;
  title: string;
  date: string;
  link?: string;
  technology: string;
  description?: string;
  type: ProjectType;
};

export type Article = {
  id: number;
  title: string;
  date: string;
  link: string;
  image: string;
};

export type SpotifyItem = {
  albumImages: string[];
  artists: string[];
  externalUrl: string;
  name: string;
  profileUrl: string;
};
