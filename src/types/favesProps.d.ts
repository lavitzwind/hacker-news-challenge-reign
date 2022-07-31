import { News } from "./news";

interface FavesProps {
  loader: boolean;
  tab: string;
  faves: News[];
  setFaves: (faves: Array) => void;
}
