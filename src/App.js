import styled from "styled-components";
import Home from "./Pages/home/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
