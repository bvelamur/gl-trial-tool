import React from "react";
import ScorecardItem from "../scorecard-item/scorecard-item.component";
import { connect } from "react-redux";
import { selectScorecardItems } from "../../redux/scorecard/scorecard.selectors";
import { createStructuredSelector } from "reselect";
import "./scorecard-collection.styles.scss";

const ScorecardCollection = ({ scorecardItems }) => {
  console.log(scorecardItems);

  return (
  <div className="scorecard-collection">
    {scorecardItems.map((scorecardItem) => (
      <ScorecardItem
        key = {scorecardItem.key}
        uniqueLabel = {scorecardItem.key}
        item = {scorecardItem}
      />
    ))}
  </div>
);}

const mapStateToProps = createStructuredSelector({
  scorecardItems: selectScorecardItems
});

export default connect(mapStateToProps)(ScorecardCollection);
