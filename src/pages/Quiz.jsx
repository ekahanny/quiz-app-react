import { useState, useEffect } from "react";
import ChoiceAnswer from "../components/elements/Answer";
import Number from "../components/elements/Number";
import Card from "../components/elements/Card";
import getQuestions from "../services/question.services";
import { useParams } from "react-router-dom";

const QuizPages = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const { category, apiCategory } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuestions(apiCategory);
        setQuestions(data);
        console.log("data: ", data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, [apiCategory]);

  const handleNumberOfQuestion = (index) => {
    setQuestionIndex(index);
  };

  const handleClickAnswer = (answer) => {
    console.log("Selected answer:", answer);
  };

  return (
    <Card>
      <h1 className="text-white text-center mt-3 font-semibold text-sm">{category} Quiz</h1>

      {/* Number of questions */}
      <div className="flex justify-center my-5">
        {questions.map((_, index) => (
          <Number
            key={index}
            number={index + 1}
            isActive={index === questionIndex}
            onClick={() => handleNumberOfQuestion(index)}
          />
        ))}
      </div>

      {/* Question */}
      {questions.length > 0 && (
        <p className="text-white text-center text-2xl mt-6">{questions[questionIndex].question}</p>
      )}

      {/* Choice Answer */}
      <div className="grid grid-cols-2 gap-4 mx-28 my-10">
        {questions.length > 0 &&
          questions[questionIndex].incorrectAnswers.map((choice, index) => (
            <ChoiceAnswer
              key={index}
              choice={choice}
              onClick={() => handleClickAnswer(choice)}
            />
          ))}
        {questions.length > 0 && (
          <ChoiceAnswer
            choice={questions[questionIndex].correctAnswer}
            onClick={() => handleClickAnswer(questions[questionIndex].correctAnswer)}
          />
        )}
      </div>
    </Card>
  );
};

export default QuizPages;
