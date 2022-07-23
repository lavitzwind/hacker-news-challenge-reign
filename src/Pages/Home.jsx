import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../Components/Dropdown";
import Navbar from "../Components/Navbar";
import NewsList from "../Components/NewsList";
import Tabs from "../Components/Tabs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200vh;
  background-color: var(--background-color);
`;

const Home = () => {
  const [page, setPage] = useState(0);
  const [dataNews, setDataNews] = useState([]);

  const angularUrl =
    "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0";
  const reactUrl =
    "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0";
  const vueUrl =
    "https://hn.algolia.com/api/v1/search_by_date?query=vue&page=0";

  const angularSearch = async () => {
    try {
      const res = await axios.get(`${angularUrl}`);
      setDataNews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const reactSearch = async () => {
    try {
      const res = await axios.get(`${reactUrl}`);
      setDataNews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const vueSearch = async () => {
    try {
      const res = await axios.get(`${vueUrl}`);
      setDataNews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Navbar />
      <Tabs />
      <Dropdown
        angularSearch={angularSearch}
        reactSearch={reactSearch}
        vueSearch={vueSearch}
      />
      <NewsList dataNews={dataNews} />
    </Container>
  );
};

export default Home;
