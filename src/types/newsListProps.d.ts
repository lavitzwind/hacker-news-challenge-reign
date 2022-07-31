import { News } from "./news";

interface NewsListProps {
  dataNews: News[];
  tab: string;
  faves: News[];
  loader: boolean;
  setFaves: (faves: Array) => void;
}
