import { ScorecardActionTypes } from "./scorecard.types";
import { addScorecardItem } from "./scorecard.utils";

const INITIAL_STATE = {
  scorecardItems: []
};

const scorecardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScorecardActionTypes.ADD_ITEM:
      return {
        ...state,
        scorecardItems: addScorecardItem(state.scorecardItems, action.payload),
      };
    default:
      return state;
  }
};

export default scorecardReducer;
