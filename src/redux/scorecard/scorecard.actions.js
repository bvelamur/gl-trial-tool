import { ScorecardActionTypes } from './scorecard.types'

export const addItem = item => ({
    type: ScorecardActionTypes.ADD_ITEM,
    payload: item
});
