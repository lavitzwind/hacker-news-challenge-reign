import styled from "styled-components";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Dropdown from "../Components/Dropdown";
import Navbar from "../Components/Navbar";
import NewsList from "../Components/NewsList";
import Tabs from "../Components/Tabs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: var(--background-color);
`;

const Home = () => {
  const [page, setPage] = useState(0);
  const [dataNews, setDataNews] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [loader, setLoader] = useState(false);
  const [tab, setTab] = useState("all");

  const angularUrl = `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${page}`;
  const reactUrl = `https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=${page}`;
  const vueUrl = `https://hn.algolia.com/api/v1/search_by_date?query=vue&page=${page}`;

  const angularSearch = async () => {
    try {
      dataNews.length === 0 ? setLoader(true) : setLoader(false);
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
      dataNews.length === 0 ? setLoader(true) : setLoader(false);
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
      dataNews.length === 0 ? setLoader(true) : setLoader(false);
      const res = await axios.get(`${vueUrl}`);
      setDataSource(res.data);
      setDataNews((prev) => [...prev, ...res.data.hits]);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  const scrollData = () => {
    setPage((prev) => prev + 1);
    if (dataSource.query === "angular") {
      angularSearch();
    } else if (dataSource.query === "reactjs") {
      reactSearch();
    } else if (dataSource.query === "vue") {
      vueSearch();
    }
  };

  const handleTabs = () => {};

  return (
    <InfiniteScroll
      dataLength={dataNews.length}
      next={() => scrollData()}
      hasMore={true}
    >
      <Container>
        <Navbar />
        <Tabs setTab={setTab} />
        <Dropdown
          angularSearch={angularSearch}
          reactSearch={reactSearch}
          vueSearch={vueSearch}
          setDataNews={setDataNews}
          tab={tab}
        />
        <NewsList dataNews={dataNews} loader={loader} tab={tab} />
      </Container>
    </InfiniteScroll>
  );
};

export default Home;
