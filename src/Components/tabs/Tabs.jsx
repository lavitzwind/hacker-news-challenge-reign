import "./tabs.css";
import { useState, useEffect } from "react";

const Tabs = ({ setTab }) => {
  const [tabColor, setTabColor] = useState(true);

  useEffect(() => {
    tabColor ? setTab("all") : setTab("faves");
  }, [tabColor, setTab]);

  return (
    <div className="tabsContainer">
      <ul className="tabsWrapper">
        <li
          className="tabsAll"
          style={{
            border: tabColor
              ? "solid 1px var(--tabs-color)"
              : "solid 1px var(--default-border-color)",
            color: tabColor ? "var(--tabs-color)" : "var(--default-text-color)",
          }}
          onClick={() => setTabColor(true)}
        >
          All
        </li>
        <div
          className="tabsFaves"
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
        </div>
      </ul>
    </div>
  );
};

export default Tabs;
