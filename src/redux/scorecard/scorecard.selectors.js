import { createSelector } from 'reselect'

// Input selector
const selectScorecard = state => state.scorecard;

// Output selector
export const selectScorecardItems = createSelector(
    [selectScorecard],
    (scorecard) => scorecard.scorecardItems
);