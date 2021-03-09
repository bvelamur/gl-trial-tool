import QuestionAnswer from "../../components/question-answer/question-answer.component";
import { Grid } from '@material-ui/core'
import React from "react";

const ObjectivesPage = () => {
  return (
    <Grid item>
      <QuestionAnswer
        QuestionText="What are you trying to achieve?"
        ResponseLabel="Be specific. 2-3 points only"
      />
      <QuestionAnswer
        QuestionText="What is the scope of the work?"
        ResponseLabel="Split the project into segments and elaborate"
      />
      <QuestionAnswer
        QuestionText="How did you choose the tasks you want to do? What are your criteria?"
        ResponseLabel="Be specific. 2-3 points only"
      />
    </Grid>
  );
};

export default ObjectivesPage;
