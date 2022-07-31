export interface DropdownProps {
  angularSearch: Function;
  reactSearch: Function;
  vueSearch: Function;
  setDataNews: (dataNews: Array) => void;
  setPageAngular: (page: number) => void;
  setPageReact: (page: number) => void;
  setPageVue: (page: number) => void;
  tab: string;
}
