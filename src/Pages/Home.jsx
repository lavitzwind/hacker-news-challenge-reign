import styled from "styled-components";
import Dropdown from "../Components/Dropdown";
import Navbar from "../Components/Navbar";
import NewsList from "../Components/NewsList";
import Tabs from "../Components/Tabs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Tabs />
      <Dropdown />
      <NewsList />
    </Container>
  );
};

export default Home;
