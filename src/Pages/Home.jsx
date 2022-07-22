import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Tabs from "../Components/Tabs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Tabs />
    </Container>
  );
};

export default Home;
