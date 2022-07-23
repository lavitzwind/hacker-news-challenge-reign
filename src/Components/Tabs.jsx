import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const TabsWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const All = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: transparent;
  padding: 0px 10px 0 10px;
  width: 98px;
  height: 31px;
  border-radius: 2px;
  border: solid 1px var(--tabs-color);
  color: var(--tabs-color);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

const Faves = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: transparent;
  padding: 0px 10px 0 10px;
  width: 98px;
  height: 31px;
  border-radius: 2px;
  border: solid 1px var(--default-border-color);
  color: var(--default-text-color);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

const Tabs = ({ setTab }) => {
  const [tabColor, setTabColor] = useState(true);

  useEffect(() => {
    tabColor ? setTab("all") : setTab("faves");
  }, [tabColor, setTab]);

  return (
    <Container>
      <TabsWrapper>
        <All
          style={{
            border: tabColor
              ? "solid 1px var(--tabs-color)"
              : "solid 1px var(--default-border-color)",
            color: tabColor ? "var(--tabs-color)" : "var(--default-text-color)",
          }}
          onClick={() => setTabColor(true)}
        >
          All
        </All>
        <Faves
          style={{
            border: !tabColor
              ? "solid 1px var(--tabs-color)"
              : "solid 1px var(--default-border-color)",
            color: !tabColor
              ? "var(--tabs-color)"
              : "var(--default-text-color)",
          }}
          onClick={() => setTabColor(false)}
        >
          My faves
        </Faves>
      </TabsWrapper>
    </Container>
  );
};

export default Tabs;
