import { useState, useEffect } from "react";
import ChoiceAnswer from "../components/elements/ChoiceAnswer";
import Number from "../components/elements/Number";
import Card from "../components/elements/Card";
import getQuestions from "../services/question.services";
import { useNavigate, useParams } from "react-router-dom";

const QuizPages = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const { category, apiCategory } = useParams();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

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

  const handleClickAnswer = (choice) => {
    setSelectedAnswer(choice);
    let isCorrect = choice === questions[questionIndex].correctAnswer;

    setTimeout(() => { 
      if (isCorrect) {
        setCorrectAnswer(prev => prev + 1);
      }

      if (questionIndex + 1 >= questions.length) {
        setLoading(true);
        setTimeout(() => {
          navigate("/completed", { state: { correctAnswer: isCorrect ? correctAnswer + 1 : correctAnswer } });
        }, 2000);
      } else {
        setQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      }
    }, 1000);
  };

  return (
    <Card>
      {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
              <span className="loading loading-spinner text-primary w-10 h-10"></span>
          </div>
      ) : (
          <div>
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
                    isSelected={selectedAnswer === choice}
                    isCorrect={false}
                  />
                ))}
              {questions.length > 0 && (
                <ChoiceAnswer
                  choice={questions[questionIndex].correctAnswer}
                  onClick={() => handleClickAnswer(questions[questionIndex].correctAnswer)}
                  isSelected={selectedAnswer === questions[questionIndex].correctAnswer}
                  isCorrect={true}
                />
              )}
            </div>
          </div>
      )}

    </Card>
  );
};

export default QuizPages;
