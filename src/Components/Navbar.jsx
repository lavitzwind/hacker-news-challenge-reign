import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 114px;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(#ececec -32%, #fff 124%);
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1150px;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.div`
  font-size: 1.75rem;
  font-family: "Baskerville", Times, serif;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <Logo>HACKER NEWS</Logo>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
