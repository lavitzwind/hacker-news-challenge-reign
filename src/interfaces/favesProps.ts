import { News } from "./news";

export interface FavesProps {
  loader: boolean;
  tab: string;
  faves: News[];
  setFaves: (faves: any) => void;
}
