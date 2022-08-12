import { News } from "./news";

export interface DropdownProps {
  angularSearch: Function;
  reactSearch: Function;
  vueSearch: Function;
  setDataNews: (dataNews: News[]) => void;
  setPageAngular: (page: number) => void;
  setPageReact: (page: number) => void;
  setPageVue: (page: number) => void;
  tab: string;
}
