import ChoiceAnswer from "../components/elements/Answer"
import Number from "../components/elements/Number"
import CardQuest from "../components/fragments/CardQuestion"

const Quiz = () => {
    return (
        <CardQuest>
            <h1 className="text-white text-center mt-3 font-semibold text-sm">Country Quiz</h1>
                    <div className="flex justify-center my-5">
                        <Number/>
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
        </CardQuest>
    )
}

export default Quiz