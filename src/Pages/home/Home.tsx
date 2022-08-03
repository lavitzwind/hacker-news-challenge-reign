import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../Components/dropdown/Dropdown";
import Navbar from "../../Components/navbar/Navbar";
import NewsList from "../../Components/newsList/NewsList";
import Tabs from "../../Components/tabs/Tabs";
import Faves from "../../Components/faves/Faves";
import { News } from "../../types/news";

const Home = () => {
  const [pageReact, setPageReact] = useState<number>(0);
  const [pageAngular, setPageAngular] = useState<number>(0);
  const [pageVue, setPageVue] = useState<number>(0);
  const [dataNews, setDataNews] = useState<News[]>([]);
  const [dataSource, setDataSource] = useState([] as any);
  const [loader, setLoader] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("all");
  const [faves, setFaves] = useState<News[]>(
    JSON.parse(localStorage.getItem("faves") || "[]")
  );

  const angularUrl = `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${pageAngular}`;
  const reactUrl = `https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=${pageReact}`;
  const vueUrl = `https://hn.algolia.com/api/v1/search_by_date?query=vue&page=${pageVue}`;

  const angularSearch = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${angularUrl}`);
      setDataSource(res.data);
      setDataNews((prev) =>
        prev ? [...prev, ...res.data.hits] : res.data.hits
      );
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };

  const reactSearch = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${reactUrl}`);
      setDataSource(res.data);
      setDataNews((prev) =>
        prev ? [...prev, ...res.data.hits] : res.data.hits
      );
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };

  const vueSearch = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${vueUrl}`);
      setDataSource(res.data);
      setDataNews((prev) =>
        prev ? [...prev, ...res.data.hits] : res.data.hits
      );
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };

  const onScroll = (e: any) => {
    console.log(e.target.documentElement.scrollTop);
    if (
      window.innerHeight + (e.target.documentElement as any).scrollTop >=
      (e.target.documentElement as any).scrollHeight
    ) {
      if (tab === "all") {
        if (dataSource.query) {
          setPageAngular((prev) => prev + 1);
          angularSearch();
        } else if (dataSource.query === "reactjs") {
          setPageReact((prev) => prev + 1);
          reactSearch();
        } else if (dataSource.query === "vue") {
          setPageVue((prev) => prev + 1);
          vueSearch();
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll as EventListener);
    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
    };
  });

  useEffect(() => {
    if (dataSource.query === "angular") {
      setPageAngular((prev) => prev + 1);
      localStorage.setItem("topic", JSON.stringify("angular"));
    } else if (dataSource.query === "reactjs") {
      setPageReact((prev) => prev + 1);
      localStorage.setItem("topic", JSON.stringify("reactjs"));
    } else if (dataSource.query === "vue") {
      setPageVue((prev) => prev + 1);
      localStorage.setItem("topic", JSON.stringify("vuejs"));
    }
  }, [dataSource?.query]);

  useEffect(() => {
    localStorage.setItem("faves", JSON.stringify(faves));
  }, [faves]);

  return (
    <div>
      <Navbar />
      <Tabs setTab={setTab} />
      <Dropdown
        angularSearch={angularSearch}
        reactSearch={reactSearch}
        vueSearch={vueSearch}
        setDataNews={setDataNews}
        tab={tab}
        setPageReact={setPageReact}
        setPageAngular={setPageAngular}
        setPageVue={setPageVue}
      />
      <NewsList
        dataNews={dataNews}
        loader={loader}
        tab={tab}
        setFaves={setFaves}
        faves={faves}
      />
      <Faves loader={loader} tab={tab} faves={faves} setFaves={setFaves} />
    </div>
  );
};

export default Home;
