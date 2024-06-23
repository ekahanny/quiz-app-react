/* eslint-disable react/prop-types */
import { useState } from "react";
import Correct from "./CorrectAnswer"
import Incorrect from "./IncorrectAnswer"


const ChoiceAnswer = ({ choice, onClick, isCorrect, isSelected }) => {
  const [hover, setHover] = useState(false);

  const hoverBackground = {
    background: "linear-gradient(#E65895, #BC6BE8)",
  };

  const defaultBackground = {
    background: "#393F6E",
  };

  return (
    <button
      className="text-white text-lg px-8 py-4 m-1 rounded-xl"
      style={hover ? hoverBackground : defaultBackground}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={onClick}
    >
      <div className="flex flex-row text-center flex justify-center items-center flex-grow">
        {choice}
        {isSelected && (isCorrect ? <Correct/> : <Incorrect/>)}
      </div>
    </button>
  );
};

export default ChoiceAnswer;
