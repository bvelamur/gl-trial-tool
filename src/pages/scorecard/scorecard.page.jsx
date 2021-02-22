import "./scorecard.styles.scss";
import ScorecardCollection from "../../components/scorecard-collection/scorecard-collection.component";
import AddScorecard from "../../components/add-scorecard/add-scorecard.component";

const ScorecardPage = () => (
  <div className="scorecard-page">
    <div className="add-scorecard-col">
      <AddScorecard />
    </div>
    <div className="scorecard-collection-col">
      <ScorecardCollection />
    </div>
  </div>
);

export default ScorecardPage;
