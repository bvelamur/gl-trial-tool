import "./work-scope.styles.scss";
import QuestionAnswer from "../../components/question-answer/question-answer.component";

import React from "react";

const WorkscopePage = () => {
  return (
    <div>
      <QuestionAnswer
        QuestionText="What is the scope of the work?"
        ResponseLabel="Split the project into segments and elaborate"
      />
      <QuestionAnswer
        QuestionText="How did you choose the tasks you want to do? What are your criteria?"
        ResponseLabel="Be specific. 2-3 points only"
      />
    </div>
  );
};

export default WorkscopePage;