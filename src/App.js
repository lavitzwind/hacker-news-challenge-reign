import styled from "styled-components";
import Home from "./Pages/Home";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
