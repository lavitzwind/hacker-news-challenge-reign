import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../Components/dropdown/Dropdown";
import Navbar from "../../Components/navbar/Navbar";
import NewsList from "../../Components/newsList/NewsList";
import Tabs from "../../Components/tabs/Tabs";
import Faves from "../../Components/faves/Faves";

const Home = () => {
  const [page, setPage] = useState(0);
  const [dataNews, setDataNews] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [loader, setLoader] = useState(false);
  const [tab, setTab] = useState("all");
  const [faves, setFaves] = useState(
    JSON.parse(localStorage.getItem("faves")) || []
  );

  const angularUrl = `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${page}`;
  const reactUrl = `https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=${page}`;
  const vueUrl = `https://hn.algolia.com/api/v1/search_by_date?query=vue&page=${page}`;

  const angularSearch = async () => {
    try {
      setLoader(true);
      const res = await axios.get(`${angularUrl}`);
      setDataSource(res.data);
      setDataNews((prev) => [...prev, ...res.data.hits]);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  const reactSearch = async () => {
    try {
      setLoader(true);
      const res = await axios.get(`${reactUrl}`);
      setDataSource(res.data);
      setDataNews((prev) => [...prev, ...res.data.hits]);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  const vueSearch = async () => {
    try {
      setLoader(true);
      const res = await axios.get(`${vueUrl}`);
      setDataSource(res.data);
      setDataNews((prev) => [...prev, ...res.data.hits]);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  const scrollData = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 10 >=
      e.target.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
      if (tab === "all") {
        if (dataSource.query === "angular") {
          angularSearch();
        } else if (dataSource.query === "reactjs") {
          reactSearch();
        } else if (dataSource.query === "vue") {
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
      localStorage.setItem("topic", JSON.stringify("angular"));
    } else if (dataSource.query === "reactjs") {
      localStorage.setItem("topic", JSON.stringify("reactjs"));
    } else if (dataSource.query === "vue") {
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
        page={page}
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
