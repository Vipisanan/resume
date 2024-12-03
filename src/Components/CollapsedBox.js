import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import ArrowNext from "../assets/iconComponents/ArrowNext";
import ArrowDown from "../assets/iconComponents/ArrowDown";

const CollapsedBox = ({ title, children }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px",
        borderStyle: "groove",
        padding: 4,
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        padding: 10,
        borderRadius: 8,
      }}
    >
      <div
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        style={{ cursor: "pointer" }}
      >
        <div
          style={{
            display: "flex",
            direction: "row",
            alignItems: "center",
            color: "#333",
          }}
        >
          <div
            style={{
              display: "flex",
              marginLeft: 3,
              marginRight: 3,
            }}
          >
            {isExpanded ? <ArrowDown /> : <ArrowNext />}
          </div>
          <div style={{ display: "flex", fontSize: 20 }}>{title}</div>
        </div>
      </div>
      <section {...getCollapseProps()}>{children}</section>
    </div>
  );
};
export default CollapsedBox;
