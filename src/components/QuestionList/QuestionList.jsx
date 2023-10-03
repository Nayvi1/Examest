import { useQuestions } from "../../context/useQuestions";
import Question from "./Question";
import Loading from "../Loading/Loading";

import styles from "./QuestionList.module.css";
import Error from "../Error/Error";

function QuestionList() {
  const { questions, isLoading, error } = useQuestions();

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className={styles["question-list"]}>
      {questions
        ? questions?.map((question) => (
            <Question question={question} key={question.id} />
          ))
        : null}
    </div>
  );
}

export default QuestionList;
