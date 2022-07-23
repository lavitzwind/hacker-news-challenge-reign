import styled from "styled-components";
import { useState, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useOnClickOutside from "../Hooks/useOnClickOutside";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 12vh;
  margin-top: 5rem;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1150px;
`;

const SelectWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px 5px 12px;
  width: 240px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  cursor: pointer;

  &:hover {
    border: solid 1px #888;
  }
`;

const DefaultText = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 100%;
`;

const OptionList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 2px 2px 0 #dad8d8;
  top: 100%;
  left: 0;
  width: 240px;
  height: 139px;
  background-color: #fff;
  z-index: 1;
`;

const Options = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 50px;

  &:hover {
    background-color: #eaeaea;
    cursor: pointer;
  }
`;

const Icons = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px 0 15px;
`;

const Topics = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: #343434;
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

const Dropdown = ({
  angularSearch,
  reactSearch,
  vueSearch,
  setDataNews,
  tab,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select your news");
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleTopic = (topic) => {
    setSelected(topic);
    topic === "Angular"
      ? angularSearch() && setDataNews([])
      : topic === "React"
      ? reactSearch() && setDataNews([])
      : vueSearch() && setDataNews([]);
  };

  const options = [
    {
      id: 1,
      name: "Angular",
      value: 1,
      icon: "assets/icons/angularIcon.png",
      alt: "Angular Icon",
    },
    {
      id: 2,
      name: "React",
      value: 2,
      icon: "assets/icons/reactIcon.png",
      alt: "React Icon",
    },
    {
      id: 3,
      name: "Vuejs",
      value: 3,
      icon: "assets/icons/vueIcon.png",
      alt: "Vue.js Icon",
    },
  ];

  return (
    <Container
      style={{
        display: tab === "all" ? "flex" : "none",
      }}
    >
      <DropdownContainer ref={dropdownRef}>
        <SelectWrapper onClick={() => setIsOpen(!isOpen)}>
          <DefaultText>
            {selected} <ArrowDropDownIcon />
          </DefaultText>
        </SelectWrapper>
        {isOpen && (
          <OptionList>
            {options.map((item) => (
              <Options key={item.id} onClick={() => setIsOpen(false)}>
                <Icons src={item.icon} alt={item.alt} />
                <Topics onClick={() => handleTopic(item.name)}>
                  {item.name}
                </Topics>
              </Options>
            ))}
          </OptionList>
        )}
      </DropdownContainer>
    </Container>
  );
};

export default Dropdown;
