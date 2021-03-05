export interface ITour {
  id: number;
  name: string;
  description: string;
  moreinfo: string
  videoLink: string;
  steps: Array<ITour>;
  imageSource?: string[];

}

export class Tour implements ITour {
  id: number;
  name: string;
  description: string;
  moreinfo: string;
  videoLink: string;
  steps: ITour[];
  imageSource?: string[];

  
}
