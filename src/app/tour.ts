export interface Tour {
  id: number;
  name: string;
  description: string;
  moreinfo: string
  videoLink: string;
  steps: Array<Tour>;
}
