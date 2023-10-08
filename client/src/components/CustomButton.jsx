import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyle, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = () => {
    const contrastColor = getContrastingColor(snap.color);
    switch (type) {
      case "filled":
        return {
          backgroundColor: snap.color,
          color: contrastColor,
        };
      case "outline":
        return {
          borderWidth: "1px",
          borderColor: contrastColor,
          color: contrastColor,
        };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
