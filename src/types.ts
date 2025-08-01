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
};