import styled from "styled-components";
import Home from "./Pages/Home";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const handleScroll = (event) => {
  console.log("scrollTop: ", event.currentTarget.scrollTop);
  console.log("offsetHeight: ", event.currentTarget.offsetHeight);
};

function App() {
  return (
    <Container onScroll={handleScroll}>
      <Home />
    </Container>
  );
}

export default App;
