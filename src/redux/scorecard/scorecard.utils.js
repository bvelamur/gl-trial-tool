export const addScorecardItem = (scorecardItems, scorecardItem) => {
    const quantity = scorecardItems.length;
    return [...scorecardItems, {...scorecardItem, key:(quantity+1).toString()}];
}