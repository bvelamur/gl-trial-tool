import { combineReducers } from 'redux'
import ScorecardReducer from './scorecard/scorecard.reducer'
import userReducer from './user/user.reducer';

export default combineReducers({
    scorecard: ScorecardReducer,
    user: userReducer
});