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
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("topic")) || "Select your news"
  );
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleTopic = (topic) => {
    console.log(topic);
    setSelected(topic);
    topic === "angular"
      ? angularSearch() && setDataNews([])
      : topic === "reactjs"
      ? reactSearch() && setDataNews([])
      : vueSearch() && setDataNews([]);
  };

  useEffect(() => {
    if (selected === "angular") {
      handleTopic(selected);
    } else if (selected === "reactjs") {
      handleTopic(selected);
    } else if (selected === "vuejs") {
      handleTopic(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const options = [
    {
      id: 1,
      name: "angular",
      value: 1,
      icon: "assets/icons/angularIcon.png",
      alt: "Angular Icon",
    },
    {
      id: 2,
      name: "reactjs",
      value: 2,
      icon: "assets/icons/reactIcon.png",
      alt: "React Icon",
    },
    {
      id: 3,
      name: "vuejs",
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
            {selected.slice(0, 1).toUpperCase() + selected.slice(1)}{" "}
            <ArrowDropDownIcon />
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
                  {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
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
