import { combineReducers } from 'redux'
import ScorecardReducer from './scorecard/scorecard.reducer'

export default combineReducers({
    scorecard: ScorecardReducer
});