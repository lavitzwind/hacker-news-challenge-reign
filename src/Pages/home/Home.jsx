import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../Components/dropdown/Dropdown";
import Navbar from "../../Components/navbar/Navbar";
import NewsList from "../../Components/newsList/NewsList";
import Tabs from "../../Components/tabs/Tabs";
import Faves from "../../Components/faves/Faves";

const Home = () => {
  const [pageReact, setPageReact] = useState(0);
  const [pageAngular, setPageAngular] = useState(0);
  const [pageVue, setPageVue] = useState(0);
  const [dataNews, setDataNews] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [loader, setLoader] = useState(false);
  const [tab, setTab] = useState("all");
  const [faves, setFaves] = useState(
    JSON.parse(localStorage.getItem("faves")) || []
  );

  const angularUrl = `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${pageAngular}`;
  const reactUrl = `https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=${pageReact}`;
  const vueUrl = `https://hn.algolia.com/api/v1/search_by_date?query=vue&page=${pageVue}`;

  const angularSearch = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${angularUrl}`);
      setDataSource(res.data);
      setDataNews((prev) => [...prev, ...res.data.hits]);
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
      setDataNews((prev) => [...prev, ...res.data.hits]);
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
      setDataNews((prev) => [...prev, ...res.data.hits]);
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };

  const scrollData = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 50 >=
      e.target.documentElement.scrollHeight
    ) {
      if (tab === "all") {
        if (dataSource.query === "angular") {
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
    window.addEventListener("scroll", scrollData);
    return () => {
      window.removeEventListener("scroll", scrollData);
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
  }, [dataSource.query]);

  useEffect(() => {
    localStorage.setItem("faves", JSON.stringify(faves));
  }, [faves]);

  return (
    <div className="">
      <Navbar />
      <Tabs setTab={setTab} />
      <Dropdown
        angularSearch={angularSearch}
        reactSearch={reactSearch}
        vueSearch={vueSearch}
        setDataNews={setDataNews}
        tab={tab}
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
