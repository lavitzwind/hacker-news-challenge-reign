import "./dropdown.css";
import { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

const Dropdown = ({
  angularSearch,
  reactSearch,
  vueSearch,
  setDataNews,
  tab,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected] = useState(
    JSON.parse(localStorage.getItem("topic")) || "Select your news"
  );
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleTopic = (topic) => {
    topic === "Angular"
      ? angularSearch() && setDataNews([])
      : topic === "React"
      ? reactSearch() && setDataNews([])
      : vueSearch() && setDataNews([]);
  };

  useEffect(() => {
    if (selected === "Angular") {
      handleTopic(selected);
    } else if (selected === "React") {
      handleTopic(selected);
    } else if (selected === "Vue") {
      handleTopic(selected);
    }
  }, []);

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
    <div
      className="dropdown"
      style={{
        display: tab === "all" ? "flex" : "none",
      }}
    >
      <div className="dropdownContainer" ref={dropdownRef}>
        <div className="selectWrapper" onClick={() => setIsOpen(!isOpen)}>
          <span className="defaultText">
            {selected} <ArrowDropDownIcon />
          </span>
        </div>
        {isOpen && (
          <div className="optionList">
            {options.map((item) => (
              <div
                className="options"
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                <img className="iconsDropdown" src={item.icon} alt={item.alt} />
                <span className="topics" onClick={() => handleTopic(item.name)}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
