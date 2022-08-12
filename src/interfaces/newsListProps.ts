import { News } from "./news";

export interface NewsListProps {
  dataNews: News[];
  tab: string;
  faves: News[];
  loader: boolean;
  setFaves: (faves: any) => void;
}
