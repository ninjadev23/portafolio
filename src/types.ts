export type Technology = {
  name: string;
  color: string;
};
export type Image = {
    file: string
    display: string
}
export interface Project {
  name: string;
  description: string;
  github: string;
  technologies: Technology[];
  live?: string;
  images?:Image[]
};
export type CertType = {
  name: string;
  image: string;
  platform: string;
  platformIcon?: string;
};

export type Skill = {
  name: string
  iconColor: string
}
export type NavItemType = {
  to: string
  name: string
}
export type Lang = "es" | "en"