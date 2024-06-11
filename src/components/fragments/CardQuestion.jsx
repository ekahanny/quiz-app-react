import ChoiceAnswer from "../elements/Answer";
import Number from "../elements/Number";

const CardQuest = () => {
    return (
        <div className="flex justify-center items-center py-12 min-h-screen">
            <div className="w-full max-w-4xl bg-[#343964] px-24 py-8 rounded-xl shadow-lg min-h-[450px]">
                <h1 className="text-white text-center mt-3 font-semibold text-sm">Country Quiz</h1>
                <div className="flex justify-center my-5">
                    <Number />
                    <Number />
                    <Number />
                    <Number />
                    <Number />
                    <Number />
                    <Number />
                    <Number />
                    <Number />
                    <Number />
                </div>
                <p className="text-white text-center text-2xl mt-6">Which country is Kuala Lumpur the capital?</p>
                <div className="grid grid-cols-2 gap-4 mx-28 my-10">
                    <ChoiceAnswer choice="Sweden" />
                    <ChoiceAnswer choice="Vietnam" />
                    <ChoiceAnswer choice="Malaysia" />
                    <ChoiceAnswer choice="Austria" />
                </div>

            </div>
        </div>
    );
}

export default CardQuest;
