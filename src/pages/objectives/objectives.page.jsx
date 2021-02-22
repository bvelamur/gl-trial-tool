import "./objectives.styles.scss";
import QuestionAnswer from "../../components/question-answer/question-answer.component";

import React from "react";

const ObjectivesPage = () => {
  return (
    <div>
      <QuestionAnswer
        QuestionText="What are you trying to achieve?"
        ResponseLabel="Be specific. 2-3 points only"
      />
    </div>
  );
};

export default ObjectivesPage;
