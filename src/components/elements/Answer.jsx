/* eslint-disable react/prop-types */

const ChoiceAnswer = ({choice, onClick}) => {
    return (
        <button 
            className="bg-[#393F6E] text-white text-lg px-8 py-4 m-1 rounded-xl flex-grow text-center"
            onClick={onClick}
        >
            {choice}
        </button>
    );
}

export default ChoiceAnswer;
