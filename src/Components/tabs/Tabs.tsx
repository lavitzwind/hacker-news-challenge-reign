import "./tabs.css";
import { useState, useEffect } from "react";

interface TabsProps {
  setTab: (tab: string) => void;
}

const Tabs = ({ setTab }: TabsProps) => {
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
            border: tabColor ? "solid 1px #1797ff" : "transparent",
            color: tabColor ? "#1797ff" : "#606060",
          }}
          onClick={() => setTabColor(true)}
        >
          All
        </li>
        <div
          className="tabsFaves"
          style={{
            border: !tabColor ? "solid 1px #1797ff" : "transparent",
            color: !tabColor ? "#1797ff" : "#606060",
            marginRight: !tabColor ? "2rem" : "0",
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
