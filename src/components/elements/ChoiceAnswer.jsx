/* eslint-disable react/prop-types */
import { useState } from "react";

const ChoiceAnswer = ({ choice, onClick }) => {
  const [hover, setHover] = useState(false);

  const hoverBackground = {
    background: "linear-gradient(#E65895, #BC6BE8)",
  };

  const defaultBackground = {
    background: "#393F6E",
  };

  return (
    <button
      className="text-white text-lg px-8 py-4 m-1 rounded-xl flex-grow text-center flex items-center justify-between"
      style={hover ? hoverBackground : defaultBackground}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => onClick(choice)} // Handle click here
    >
      {choice}
    </button>
  );
};

export default ChoiceAnswer;
