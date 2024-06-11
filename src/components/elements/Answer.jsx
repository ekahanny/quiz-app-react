/* eslint-disable react/prop-types */

const ChoiceAnswer = ({choice}) => {
    return (
        <button className="bg-[#393F6E] text-white text-lg px-8 py-4 m-1 rounded-xl flex-grow text-center">
            {choice}
        </button>
    );
}

export default ChoiceAnswer;
